import React, { Component } from 'react';

//=========================Importing=================
import {Link} from "react-router-dom";



const TopMenu = () => {
    return ( 
        <div className="TopMenu">
            <ul>
                <li><Link to= "/collections/newin">NewIn</Link></li>
                <li><Link to= "/collections/unstiched">Unstiched</Link></li>
                <li><Link to= "/collections/pret">Pret</Link></li>
                <li><Link to= "/collections/lookbooks">LookBooks</Link></li>
                <li><Link to= "/collections/premium">Premium</Link></li>
                <li><Link to= "/collections/sale">Sale</Link></li>
                <li><Link to= "/collections/exclusives">Exclusives</Link></li>
            </ul>

            <ul className="Cart">
                <li><Link to= "/cart">My Cart</Link></li>
            </ul>
        </div>
     );
}
 
export default TopMenu;