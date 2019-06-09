import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;

    return (
        <>
            {cart.map(item => {
                return (
                    <CartItem
                        value={value}
                        key={item.id}
                        item={item}
                    />
                )
            })}
        </>
    )
}