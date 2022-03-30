import React from 'react';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useProducts';

const Orders = () => {
    const [products,setProducts] = useProducts ();
    const [cart,setCart] = useCart(products);
    return (
        <div>
            <h2>This is orders:{products.length}</h2>
            <p> cart has:{cart.length}</p>
        </div>
    );
};

export default Orders;