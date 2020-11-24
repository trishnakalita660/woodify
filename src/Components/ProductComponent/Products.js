import React from 'react';
import Furniture from '../Furniture';
import Login from '../Login';
import './products.css'
function Products( {image}) {

 

    return (
        <div>
           <div className="products__title"> I'M GONNA JUDGE YOUR CHOICE </div> 
            image goes here <img src={image} alt="bla bka"/>
            <Furniture/>
         </div>
       )
}

export default Products
