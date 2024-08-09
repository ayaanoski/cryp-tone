import React from 'react';
import { useNavigate } from 'react-router-dom';
// import "./cart.css";

const Cart = () => {
    const navigate = useNavigate();
    const items = [{ id: 1, name: "Item 1", price: 100 }, { id: 2, name: "Item 2", price: 200 }]; // Sample items

    const handleBuyNow = () => {
        navigate('/buy-now');
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
};

export default Cart;
