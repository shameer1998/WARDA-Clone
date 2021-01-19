import React from 'react';
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';


const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-child">
                <ul>
                <h1> About Warda</h1>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/aboutus">About Us</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/contact-us">Contact Us</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/privacypolicy">Privacy Policy</Link></li>
                </ul>
            </div>

            <div className="footer-child">
                <ul>
                    <h1>Customer Care</h1>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/complainform">Complaint Form</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/shippingandhandling">Shipping</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/customercare">Cuatomer Care</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/exchanges">Exchanges</Link></li>
                    <li><Link style= {{textDecoration: 'none',color: 'black'  }} to= "/faq">FAQ's</Link></li>
                </ul>
            </div>


            <div className="footer-child">
                <ul>
                <h1>Payment Partners</h1>
                    <li>
                        <img style={{height: '20px', marginLeft: '5px'}} src="./pics/hbl.png" alt="hbl"/>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./pics/mcb.png" alt="mcb"/>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./pics/visa.png" alt="visa"/>
                    </li>
                </ul>
            </div>

            <div className="footer-child">
                <ul>
                    <h1>Logistic Partners</h1>
                    <li>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./pics/tcs.png" alt="tcs"/>
                        <img style={{height: '20px' , marginLeft: '5px'}} src="./pics/7up.png" alt="dnl"/>
                    </li>
                </ul>
            </div>

        </div>
    );
}
 
export default Footer;