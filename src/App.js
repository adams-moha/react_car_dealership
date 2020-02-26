import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer'
import Preloader from './component/Preloader'
import Details from './component/Details';
import Cart from './component/Cart';
import Modal from './component/Modal'
import Default from './component/Default';
import HomePage from './component/HomePage/HomePage'

class App extends Component{
  render(){
    return (
      <React.Fragment>
        {/* <Preloader /> */}
          <Navbar />
          
        
        <Switch>
          
          <Route exact path="/" component={HomePage} />
          
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal/>
        <Footer/>
      </React.Fragment>
    );
  }
  
}

export default App;
