import React, { useEffect, useState } from 'react';
import useProducts from '../../hook/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    // const [products,setProduct] = useState([]);
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useState([]);
    // useEffect(()=>{
    //   fetch('products.json')
    //   .then(res => res.json())
    //   .then(data => setProduct(data))
    // },[])
    useEffect(() =>{
      const storedCart = getStoredCart();
      const saveCart = [];
      for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity= quantity;
          saveCart.push(addedProduct);
        }
        // console.log(addedProduct);
      }
      // console.log(storedCart);
    }, [products])
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