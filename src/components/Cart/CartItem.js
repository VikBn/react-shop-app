import React from 'react';

export default function CartItem({item, value}) {
    const {title, total, price, img, count, id} = item;
    const {decrement, increment, removeItem} = value;
    return (
        <>
            <div className="row my-3 text-capitalize text-center">
                <div className="col-lg-2 col-10 mx-auto">
                    <img
                        src={img}
                        style={{width: "5rem", height: "5rem"}}
                        className="img-fluid"
                        alt="product"
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    Price: {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span onClick={() => decrement(id)} className="cursor-pointer"><i className="fas fa-minus" /></span>
                            <span className="mx-3">{count}</span>
                            <span onClick={() => increment(id)} className="cursor-pointer"><i className="fas fa-plus" /></span>
                        </div>
                    </div>
                </div>
                {/* */}
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => removeItem(id)}>
                        <i className="fas fa-trash"/>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>Total: $ {total}</strong>
                </div>
            </div>
        </>
    )
}