import React, { Component } from 'react';
import Cart from './Cart/Cart';

const SingleProduct = ({product}) => {
    return ( 
        <div className="SingleProduct">

        
            <img src={product.imagepath} alt=""/>        


            <h4>
                {product.name}
            </h4>
            <p>
                Price: Rs.{product.price}.00
            </p>
            <div className="btn_AddToCart">
            <button onClick={()=> Cart(product)}>Add To Cart</button>
            </div>

        </div>
     );
}
 
export default SingleProduct;