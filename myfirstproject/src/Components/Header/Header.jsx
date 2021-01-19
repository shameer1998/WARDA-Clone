import React from 'react';
//=========================Importing=================
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="Header">
            <div className="contactus header-child">
                NeedHelp?03014980779
            </div>

            
            <div className="Logo header-child">
            <Link style= {{textDecoration: 'none',color: 'black'  }} to= "/"><img src="./wardalogo.png" alt=""/></Link>
            </div>


            <div className="account header-child">
                <ul>
                    <li>icon</li>
                    <li><Link to= "/myaccount">My Account</Link></li>
                </ul>
            </div>

        </div>
    );
}
 
export default Header;