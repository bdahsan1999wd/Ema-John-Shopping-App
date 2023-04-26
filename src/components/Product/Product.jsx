import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {

    const { category, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>

            <img src={img} alt="product-image" />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};
import './Product.css';

export default Product;