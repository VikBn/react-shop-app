import React, {Component} from 'react';
import {ProductConsumer} from "../../context";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartColumns from "./CartColumns";

export default class Cart extends Component {

    render() {
        return (
            <div className="container-fluid">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;

                        if (cart.length > 0) {
                            return (
                                <>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </>
                            )
                        } else {
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </div>
        );
    }
}