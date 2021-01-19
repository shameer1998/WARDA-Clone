import React, { Component } from 'react';
import CartIcon from '../Components/icons/shopping-cart-solid.svg'
//=========================Importing=================
import {Link} from "react-router-dom";
import Cart from './Cart/Cart';


const TopMenu = () => {
    return ( 
        <div className="TopMenu">


            <div className="menuitems menuchild" >
                <ul>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/newin">NewIn</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/unstiched">Unstiched</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/pret">Pret</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/lookbooks">LookBooks</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/premium">Premium</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/sale">Sale</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/collections/exclusives">Exclusives</Link></li>
                </ul>
            </div>


            <div className="cart menuchild cartnumber">
                <ul>
                    <li><Link style= {{textDecoration: 'none',color: 'black' }} to= "/cart"><img src={CartIcon} alt="" width="20"/><span>05</span></Link></li>
                </ul>
            </div>

        </div>
     );
}
 
export default TopMenu;