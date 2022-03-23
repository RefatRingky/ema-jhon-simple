import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
    },[])
    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
              {
                  products.map(product =><Product key={product.id}
                  product={product}
                  handleAddToCart ={handleAddToCart}
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