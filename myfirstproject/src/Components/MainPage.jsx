import React from 'react';
import SubscribeButton from './SubscribeButton';
import ShopNow from '../ShopNow';




const MainPage = () => {
    return (
        <div className="MainPage">


            <div className="newcollection">
                <img src="./pics/pic1.jpg" alt=""/>
            </div>
            

            <div className="featured">
                <div className="featured-child1"><img src="./pics/unsti.jpg" alt="unstiched"/><ShopNow title="Un-Stiched" link="/collections/unstiched"/></div>
                <div className="featured-child2" ><img src="./pics/pret.jpg" alt="pret"/><ShopNow title="Pret" link="/collections/pret"/></div>
                <div className="featured-child3"><img src="./pics/bottoms.jpg" alt="bottoms"/><ShopNow title="New In" link="/collections/newin"/></div>
            </div>


            <div className="video">
               <SubscribeButton/>
               <iframe iframe title="Warda Video" width="100%" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0"></iframe>
               
            </div>

        </div>
    );
}
 
export default MainPage;