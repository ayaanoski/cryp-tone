import React from 'react';
import './land.css'; // Assuming you have a CSS file for styling

const products = [
    { id: 1, title: "Product 1", description: "This is the description for product 1", imageUrl: "https://i.pinimg.com/originals/32/d6/27/32d6277de3684422188671e01b937134.jpg" },
    { id: 2, title: "Product 2", description: "This is the description for product 2", imageUrl: "https://i.pinimg.com/originals/d5/ef/26/d5ef262aec63cc8eb81c489421e31d86.jpg" },
    { id: 3, title: "Product 3", description: "This is the description for product 3", imageUrl: "https://i.pinimg.com/originals/cc/ec/c0/ccecc091bb3e3fc6c14334cd8d418aa3.jpg" },
    { id: 4, title: "Product 4", description: "This is the description for product 4", imageUrl: "https://i.pinimg.com/originals/51/e2/09/51e2096c24cc5885d54186f4455914b3.jpg" },
    { id: 5, title: "Product 5", description: "This is the description for product 5", imageUrl: "https://i.pinimg.com/originals/0e/a4/51/0ea4519f6552c71e256fe0c3bee56ba6.jpg" },
    { id: 6, title: "Product 6", description: "This is the description for product 6", imageUrl: "https://i.pinimg.com/originals/4f/be/92/4fbe92e4439985a859e9bf51ee1911b4.jpg" },
    { id: 7, title: "Product 7", description: "This is the description for product 7", imageUrl: "https://i.pinimg.com/originals/27/c7/36/27c73668b6b782109520f21d8aef5c9d.jpg  " },
    { id: 8, title: "Product 8", description: "This is the description for product 8", imageUrl: "https://via.placeholder.com/150" },
    { id: 9, title: "Product 9", description: "This is the description for product 9", imageUrl: "https://via.placeholder.com/150" },
    { id: 10, title: "Product 10", description: "This is the description for product 10", imageUrl: "https://via.placeholder.com/150" },
    { id: 11, title: "Product 11", description: "This is the description for product 11", imageUrl: "https://via.placeholder.com/150" },
    { id: 12, title: "Product 12", description: "This is the description for product 12", imageUrl: "https://via.placeholder.com/150" }
];

const HomePage = () => {
    return (
        <div className="home-container">
            
            <h1>MUSIC</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.title} className="product-image" />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
