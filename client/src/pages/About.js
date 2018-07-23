import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer';

export default ({ match }) => (<div>


  <div className="container">
          <div className="row">
      <h2 className="PageHeader">About Us</h2>
        <ul>
          <li>
            <Link to={`${match.url}/ourstory`}>Our Story</Link>
          </li>
          <li>
            <Link to={`${match.url}About/ourhistory`}>Our History</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
    </div>
    </div>

   <Footer /> 
  </div>
);

// const About = ({ match }) => (
  //   <div>
  //     <h2>Our Story</h2>
  //     <ul>
  //       <li>
  //         <Link to={`${match.url}/ourstory`}>Our Story</Link>
  //       </li>
  //       <li>
  //         <Link to={`${match.url}/ourhistory`}>Our History</Link>
  //       </li>
  //       <li>
  //         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
  //       </li>
  //     </ul>
  
  //     <Route path={`${match.url}/:shopId`} component={GalleryShop} />
  //     <Route
  //       exact
  //       path={match.url}
  //       render={() => <h3>Please select a topic.</h3>}
  //     />
  //   </div>
  // );
  