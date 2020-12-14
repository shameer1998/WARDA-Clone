import React from 'react';
//=========================Importing=================
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="Header">
            <div className="ContactUs">NeedHelp?03014980779</div>
            <div className="Logo">
                <img src="./wardalogo.png" alt=""/>
            </div>
            <div>
                <ul>
                    <li>icon</li>
                    <li><Link to= "/myaccount">My Account</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Header;