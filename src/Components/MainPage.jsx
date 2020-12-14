import React from 'react';




const MainPage = () => {
    return (
        <div className="MainPage">
            <div className="newcollection">
            <img src="./pics/pic1.jpg" alt=""/>
            </div>
            

            <div className="featured">
                <div><img src="./pics/unsti.jpg" alt=""/></div>
                <div><img src="./pics/pret.jpg" alt=""/></div>
                <div><img src="./pics/bottoms.jpg" alt=""/></div>
            </div>


            <div className="video">
                
               <iframe iframe width="100%" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0"></iframe>
               
            </div>
        </div>
    );
}
 
export default MainPage;