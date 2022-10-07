import './Cart.css';
import React from 'react';

const Cart = ({ cart, clearCart, children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // total = total + product.price;
        total += product.price * product.quantity;
        shipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = parseFloat((total * .1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;