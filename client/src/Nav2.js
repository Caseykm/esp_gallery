import React, { Component } from 'react';
import './Nav.css'; // Importing nav.css
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from './logo.svg';





class Nav extends Component {
  state = {
    response: ''
  };
  render() {
    return (
     
      <div className="Header">
        <div className="Nav" color="green" light expand="md">
          <ul>
            {/* <li> */}
              <Link to="/">Virtual Gallery</Link>
            {/* </li> */}
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
          </ul>    {/* add links to forms later  */}
        </div>
     </div>

    );
  }
}



export default Nav; //Export Nav




