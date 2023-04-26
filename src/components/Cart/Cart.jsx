import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart;  // option-1
    // const {cart} = props;  // option-2

    // console.log(cart);

    let total = 0;
    let totalShipping = 0;

    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = total * 7 / 100;


    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: $ {tax}</p>
            <h4>Grand Total: $ </h4>
        </div>
    );
};

export default Cart;