import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav"; // Importing from  Nav.js
import "./App.css"; // Importing from App.css
import HomePage from "./pages/HomePage"; // Imports homepage AKA Virtual Gallery into App.js
import GalleryShop from "./pages/GalleryShop"; // Imports GalleryShop into App.js
import SellArt from "./pages/SellArt"; // Imports SellArt.js into App.js
import About from "./pages/About"; // Imports About.js into App.js
import ContactUs from "./forms/ContactUs"; // Imports ContactUs.js into App.js
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Footer from "./pages/Footer"; // Imports Footer.js into App.js
import TermsOfService from "./pages/TermsOfService";

//Ckm

// import ReactDOM from 'react-dom';
import cloudinary from "cloudinary-core";
import {
  CloudinaryContext,
  Image,
  Transformation,
  Video
} from "cloudinary-react";

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "dxmelc0e6" });

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
    const publicIds = ["spices", "kitten-playing", "reindeer"];
    const transformation = new cloudinary.Transformation();
    transformation
      .width(500)
      .crop("scale")
      .effect("cartoonify");

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
        

          <Nav />
          <Route exact path="/" component={HomePage} />
          {/* Goes to the URL home and renders what is in pages/ HomePage.js  eg. it renders the componet {HomePage} */}
          <Route exact path="/shop" component={GalleryShop} />
          {/* Goes to  URL pages/GalleryShop.js and renders what is in the file */}
          <Route exact path="/sellart" component={SellArt} />
          <Route exact path="/about" component={About} />
          {/* Goes to the url/about and renders the componet {about} eg renders what is in the pages/aboout.js page */}
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/cart" component={Cart} /> */}
          {/* <Route exact path="/product" component={ProductPage} />  */}
          <Route exact path="/footer" component={Footer} /> 
          <Route exact path="/Termsofservice" component={TermsOfService} /> 

          {/* cloudinary */}
          {/* <Route path='/image/upload' render={
+             () => (
+               <ImageUpload/>
+             )}/> */}
        </div>
      </Router>

     
      
    );
  }
}



export default App;
