import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav' // Importing from  Nav.js
import './App.css'; // Importing from App.css 
import logo from './logo.svg';
import HomePage from './pages/HomePage' // Imports homepage AKA Virtual Gallery into App.js
import GalleryShop from './pages/GalleryShop' // Imports GalleryShop into App.js
import SellArt from './pages/SellArt' // Imports SellArt.js into App.js
import About from './pages/About' // Imports About.js into App.js
import ContactUs from './forms/ContactUs' // Imports ContactUs.js into App.js

//Ckm

// import ReactDOM from 'react-dom';
import cloudinary from 'cloudinary-core';
import { CloudinaryContext, Image, Transformation, Video } from 'cloudinary-react';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'dxmelc0e6'});

//ckm

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // NAV ROUTES - Calling from nav.js
  render() {
    const publicIds = ['spices', 'kitten-playing', 'reindeer'];
    const transformation = new cloudinary.Transformation();
    transformation.width(500).crop('scale').effect('cartoonify');

    return (

// const SampleImg = () => (
//     <img src={cloudinaryCore.url('spices')} />
// );

// //
// {/* <input name="file" type="file"
//    class="file-upload" data-cloudinary-field="image_id"
//    data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}
// return 
//    <CloudinaryContext cloudName="dxmelc0e6">
//    <Image publicId="spices" format="jpg">
//        <Transformation crop="fill" gravity="faces" width="300" height="200"/>
//    </Image>
// </CloudinaryContext>

      <Router>
        
        <div>
          {/* <TopNav /> */}

           <Nav />
          <Route exact path="/" component={HomePage} />
          {/* Goes to the URL home and renders what is in pages/ HomePage.js  eg. it renders the componet {HomePage} */}
          <Route exact path="/shop" component={GalleryShop} />
          {/* Goes to  URL pages/GalleryShop.js and renders what is in the file */}
          <Route exact path="/sellart" component={SellArt} />
          <Route exact path="/about" component={About} />
          {/* Goes to the url/about and renders the componet {about} eg renders what is in the pages/aboout.js page */}
          <Route exact path="/contactus" component={ContactUs} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} /> */}
          {/* <Route exact path="/product" component={ProductPage} />  */}
          {/* <Route exact path="/footer" component={Footer} /> */}
        </div>
      </Router>
    );
  }
}
// END OF NAV

// (PAGES) COMPONENTS - HAVE BEEN MOVED TO THER OWN .JS FILE
// HOME PAGE
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const SellArt = () => (
//   <div>
//     <h2>Sell Art</h2>
//     <p>Stuff ksdfhg kvhgirt gibuir</p>
//   </div>
// );

// const Shop = () => (
//   <div>
//     <h2>Gallery Shop</h2>
//   </div>
// );

// const ContactUs = () => (
//   <div>
//     <h2>Contact Us</h2>
//   </div>
// );

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

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );
// END OF (PAGES) COMPONENTS

export default App;
