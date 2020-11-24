import React from 'react';
import Header from './Header';
import './home.css'
import LoginModal from './LoginComponent/LoginModal';
import Products from '../Components/ProductComponent/Products';

const Home = ()=> {
    return (
        
       <div > <div style={{float:"right" }}><LoginModal/></div>
         <div className="home__ad">
        <div><Header/> </div>
         
         
         </div>
         <div className="home__products">
         <Products
         id="12321341"
         title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
         price={11.96}
         rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />
        </div>
        </div>
    )
}

export default Home
