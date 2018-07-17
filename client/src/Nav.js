import React, { Component } from 'react';
import './nav.css'; // Importing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import logo from './logo.svg';


class Nav extends Component {
  state = {
    response: ''
  };
  
// Added this code to render stuff in browser - and I installed npm install react-router-dom
  render() {
    return (
        <div className="Nav">
          <ul>
            <li>
              <Link to="/">Virtual Gallery</Link>
            </li>
            <li>
            <Link to="/shop">Gallery Shop</Link>
            </li>

            <li>
            <Link to="/sellart">Sell Art</Link>
            </li>
            <li>
            <Link to="/contactus">Contact Us</Link>
            </li>

            <li>
            <Link to="/about">About Us</Link>
            </li>
          </ul>
        

    {/* add links to froms later  */}


        </div>

    );
  }
}



export default Nav;




