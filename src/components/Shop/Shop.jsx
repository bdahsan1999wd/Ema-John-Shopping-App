import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);


    // -------------------------No 1-------------------------

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // -------------------------No 2-------------------------

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const res = await fetch('products.json');
    //         const data = await res.json();
    //         setProducts(data);
    //     };

    //     fetchProducts().catch(console.error);
    // }, []);

    // -------------------------No 3-------------------------

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const res = await fetch('products.json');
    //             const data = await res.json();
    //             setProducts(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchProducts();
    // }, []);

    

    useEffect(() => {

        const storedCart = getShoppingCart();

        const savedCart = [];

        // step 1: get id of the storedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the addedProduct to the savedCart
                savedCart.push(addedProduct);
            }
            // console.log('added Product...', addedProduct);

        }
        // step 5: set the cart
        setCart(savedCart);

    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.id)
    }

    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;