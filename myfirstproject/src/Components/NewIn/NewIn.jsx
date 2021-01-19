import React from 'react';
import SingleProduct from '../SingleProduct';


const NewIn = () => {
    const[products,setProducts]=React.useState([
        {imagepath:"../pics/new1.jfif",name:"2 piece Khadar",price: 500},
        {imagepath:"../pics/new2.jfif",name:"3 piece style",price: 600},
        {imagepath:"../pics/new3.jfif",name:"style 3",price: 600},
        {imagepath:"../pics/new4.jfif",name:"style 4",price: 600},
        {imagepath:"../pics/new5.jfif",name:"style 5",price: 600},
        {imagepath:"../pics/new6.jfif",name:"style 6",price: 600},
        {imagepath:"../pics/new6.jfif",name:"style 6",price: 600},
        {imagepath:"../pics/new4.jfif",name:"style 4",price: 600},




    ]);
    return ( <div className="NewIn">
        <hr/>
        <h1>New Variety of Products are Here</h1>

        {products.length==0 ? (<p>There are no Products</p>) :
         ( <div className="NewIn-child">
             {products.map( (product,index) =>
            (<SingleProduct key={index} product={product}/>)
             )}
             </div> ) }
        
        
    </div> );
}
 
export default NewIn;