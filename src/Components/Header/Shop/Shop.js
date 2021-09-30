import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key}
                        product={product}
                        const handleAddToCart={handleAddToCart}
                    ></Product>
                    )
                }
                <h3>Products: </h3>
            </div>
            <div className="cart-container">
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;