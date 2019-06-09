import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {
        clearCart,
        cartSubtotal,
        cartTax,
        cartTotal
    }
        = value;
    return (
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-10 mt-2 mn-sm-5 ml-md-auto col-sm-8">
                    <Link to="/">
                        <button
                            onClick={clearCart}
                            className="btn btn-outline-danger text-uppercase mb-3 mx-5"
                        >
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            Subtotal:
                        </span>
                        <strong>$ {cartSubtotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Tax:
                        </span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Total:
                        </span>
                        <strong>$ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    )
}