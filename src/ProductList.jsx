import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice'; // Import addItem from CartSlice
import CartItem from './CartItem'; // Import CartItem component
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({}); // Track added items
    const dispatch = useDispatch();  // Redux dispatch function

    // Get cart items from Redux store
    const cartItems = useSelector(state => state.cart.items);

    // List of plants (as before)
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
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2020/02/10/16/43/peace-lily-4823622_1280.jpg",
                    description: "Known for its air-purifying and decorative properties.",
                    cost: "$20"
                },
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
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2017/06/10/16/11/rosemary-2395595_1280.jpg",
                    description: "A fragrant herb used in cooking and aromatherapy.",
                    cost: "$18"
                },
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2018/07/04/15/18/jasmine-3519744_1280.jpg",
                    description: "Known for its sweet fragrance and beautiful flowers.",
                    cost: "$25"
                }
            ]
        },
        {
            category: "Succulent Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2017/06/10/16/11/aloe-vera-2395599_1280.jpg",
                    description: "A medicinal plant used to treat skin conditions.",
                    cost: "$10"
                },
                {
                    name: "Cactus",
                    image: "https://cdn.pixabay.com/photo/2017/07/07/03/43/cactus-2484640_1280.jpg",
                    description: "A hardy plant known for its ability to survive in dry environments.",
                    cost: "$12"
                },
                {
                    name: "Echeveria",
                    image: "https://cdn.pixabay.com/photo/2018/06/01/13/06/echeveria-3452190_1280.jpg",
                    description: "A beautiful rosette-shaped succulent plant.",
                    cost: "$15"
                }
            ]
        }
    ];

    // Function to handle adding items to the cart
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));  // Dispatch to Redux store
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true  // Mark plant as added
        }));
    };

    // Toggle cart visibility
    const handleCartClick = () => {
        setShowCart(!showCart);
    };

    // Continue shopping (hide cart)
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
                <div className="product-grid">
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
                                        {addedToCart[plant.name] ? (
                                            <button disabled>Added to Cart</button>  // Disable button after adding
                                        ) : (
                                            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                        )}
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
