import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/footer'



function App() {
  return (
    
       <React.Fragment>
         <Navbar />
         <Switch>
         <Route exact  path="/" component={ProductList} />
         <Route path="/details" component={Details} />
         <Route path="/cart" component={Cart} />
           
         <Route component={Default} />
         </Switch>
         <Modal />
         <Footer />
       </React.Fragment>

  );
}

export default App;
