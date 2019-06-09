import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    state = {
        products: storeProducts,
        detailProduct: [],
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState({
            products: tempProducts
        })
    };

    getItem = id => {
        return this.state.products.find(item => item.id === id);
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({
            detailProduct: product
        })
    };

    addToCart = id => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;


        this.setState({
                products: tempProduct,
                cart: [...this.state.cart, product]
            },
            () => this.addTotals()
        )
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState({
            modalProduct: product,
            modalOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        let product = tempCart[index];

        if (product.count > 1) {
            product.count -= 1;
            product.total = product.count * product.price;
            this.setState({
                cart: [...tempCart]
            }, () => {
                this.addTotals();
            })

        } else {
            this.removeItem(id);
        }
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState({
            cart: [...tempCart]
        }, () => {
            this.addTotals();
        });
    };

    clearCart = () => {
        this.state.cart.map(item => item.inCart = false);

        this.setState({
            cart: [],
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    };

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter((item) => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState({
            cart: [...tempCart],
            products: [...tempProducts]
        }, () => {
            this.addTotals();
        })
    };

    addTotals = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.total));
        const tempTax = subtotal * .1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        this.setState({
            cartSubtotal: subtotal,
            cartTax: tax,
            cartTotal: total
        })
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                clearCart: this.clearCart,
                decrement: this.decrement,
                increment: this.increment,
                handleDetail: this.handleDetail,
                removeItem: this.removeItem,
                openModal: this.openModal,
                closeModal: this.closeModal,
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};