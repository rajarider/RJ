import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './../customjs/Home.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './../customjs/Contact.js';




class CustomRoute extends Component {
  render() {
    return (
      <Router>
        <div>

          <ul className="header">
            <li><a className="companyName">RJ Mineral Waters</a></li>
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>

            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a className="companyNumber"><i class="fa fa-phone" aria-hidden="true"></i>822 041 5273</a></li>

          </ul>
          <Route exact path="/" component={Home} />

          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />

          <div className="firstFooterWrap">
            <div className="contentWrap">
              <h4>Free Delivery On All Orders</h4>
              <h2>We Are Ready to Take Your Call !</h2>
              <h2>822 041 5273</h2>
            </div>

          </div>

          <div className="secondFooterWrap">
            <div className="row">
              <div className="col-lg-4">
                <div className="addressWrap">
                  <h6>Address</h6>
                  <span>175/41 Deivakanni Street, Anuppanadi</span>
                  <p>Madurai, TamilNadu.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="followWrap">
                  <h6>Follow</h6>
                  <a href="https://www.facebook.com/ciyan.muthu.77"  target="_blank" className="fbIconWrap"><i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contactWrap">
                  <h6>Contact</h6>
                  <span>rajamuthukathan38@gmail.com</span>
                  <p>822 041 5273</p>
                </div>
              </div>
            </div>
          </div>

        </div>


      </Router>
    );
  }
}

export default CustomRoute;