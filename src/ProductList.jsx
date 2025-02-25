import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]); // State to hold cart items

    // List of plants
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                // Add more plants here
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                // Add more plants here
            ]
        },
        // More categories here
    ];

    // Function to handle adding items to the cart
    const handleAddToCart = (plant) => {
        setCartItems((prevItems) => [...prevItems, plant]);
    };

    // Function to toggle cart visibility
    const handleCartClick = () => {
        setShowCart(!showCart);
    };

    // Function to continue shopping (hide cart and show products)
    const handleContinueShopping = () => {
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar">
                <div className="luxury">
                    <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <div>
                            <h3>Paradise Nursery</h3>
                            <i>Where Green Meets Serenity</i>
                        </div>
                    </a>
                </div>
                <div className="navbar-links">
                    <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '30px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                            <circle cx="80" cy="216" r="12" />
                            <circle cx="184" cy="216" r="12" />
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="category">
                            <h2>{category.category}</h2>
                            <div className="products">
                                {category.plants.map((plant, index) => (
                                    <div key={index} className="product">
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p>{plant.cost}</p>
                                        <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem cartItems={cartItems} onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
