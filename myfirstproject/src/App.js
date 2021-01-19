import React from 'react';
import './App.css';
import './Comp-CSS/TitleTag.css'
import './Comp-CSS/ShopNow.css'
//import axios from 'axios';

//============== Importing Browser Routet======================
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

//=========================================Components Importing========================================
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TopMenu from "./Components/TopMenu";
import MainPage from './Components/MainPage';
import Unstiched from './Components/UnStiched/Unstiched';
import Pret from './Components/Pret/Pret';
import LookBooks from './Components/LookBooks/LookBooks';
import Premium from './Components/Premium/Premium';
import Sale from './Components/Sale/Sale.jsx';
import Exclusives from './Components/Exclusives/Exclusives';
import NewIn from './Components/NewIn/NewIn';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound';
import MyAccount from './Components/Header/MyAccount/MyAccount';
import AboutUs from './Components/Footer/AboutUs';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy';
import ContactUs from './Components/Footer/ContactUs';
import ScrollToTop from './Components/ScrollToTop';

function App() {
 
    return (
      <Router>
      <div>
        <ScrollToTop/>
        <Header/>

        <TopMenu/>

        <Switch>
          <Route path= "/myaccount" component= {MyAccount} />
          <Route path= "/collections/newin" component= {NewIn} />
          <Route path= "/collections/unstiched" component= {Unstiched} />
          <Route path= "/collections/pret" component= {Pret} />
          <Route path= "/collections/lookbooks" component= {LookBooks} />
          <Route path= "/collections/premium" component= {Premium} />
          <Route path= "/collections/sale" component= {Sale} />
          <Route path= "/collections/exclusives" component= {Exclusives} />
          <Route path= "/cart" component= {Cart} />

          <Route path= "/aboutus" component= {AboutUs} />
          <Route path= "/contact-us" component= {ContactUs} />
          <Route path= "/privacypolicy" component= {PrivacyPolicy} />


          <Route path= "/notfound" component= {NotFound} />
          <Route path= "/" exact component= {MainPage} />
          <Redirect to="/notfound"/>
          </Switch>
      </div>

      <Footer/>
      
      </Router>
    );
  }


 



export default App;
