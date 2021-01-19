import React, { Component } from 'react';
import {Link} from "react-router-dom";







class ShopNow extends Component {
    render(){
        return(
            <div className="shop-now">

                    <h3>
                        {this.props.title}
                    </h3>

                    
                        <Link style= {{textDecoration: 'none',color: 'black' , fontSize:'15px', top:'0' }} to= {this.props.link} >SHOP NOW</Link>
                    

            </div>
        );
    }
}


export default ShopNow;