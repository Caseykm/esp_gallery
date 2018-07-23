import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav"; // Importing from  Nav.js
import "./App.css"; // Importing from App.css
import HomePage from "./pages/HomePage"; // Imports homepage AKA Virtual Gallery into App.js
import GalleryHire from "./pages/GalleryHire"; 
import GalleryShop from "./pages/GalleryShop"; // Imports GalleryShop into App.js
import SellArt from "./pages/SellArt"; // Imports SellArt.js into App.js
import About from "./pages/About"; // Imports About.js into App.js
import ContactUs from "./forms/ContactUs"; // Imports ContactUs.js into App.js
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import axios from 'axios'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dxmelc0e6/upload';
const CLOUDINARY_UPLOAD_PRESET = 'espgallery';

// cloudinary>
window.onload=function(){
  let imgPreview = document.getElementById('img-preview');
  let fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event) {
  let file = event.target.files[0];
let formData = new FormData();
formData.append('file', file);
formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function(res) {
    console.log(res);
  }).catch(function(err) {
    console.error(err);
  })
})};
// cloudinary
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


    return (

      <Router>
        <div>
        

          <Nav />
          <Route exact path="/" component={HomePage} />
          {/* Goes to the URL home and renders what is in pages/ HomePage.js  eg. it renders the componet {HomePage} */}
          <Route exact path="/shop" component={GalleryShop} />
          <Route exact path="/hire" component={GalleryHire} />
          {/* Goes to  URL pages/GalleryShop.js and renders what is in the file */}
          <Route exact path="/sellart" component={SellArt} />
          <Route exact path="/about" component={About} />
          {/* Goes to the url/about and renders the componet {about} eg renders what is in the pages/aboout.js page */}
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/cart" component={Cart} /> */}
          {/* <Route exact path="/product" component={ProductPage} />  */}
          {/* <Route exact path="/footer" component={Footer} /> 
          <Route exact path="/Termsofservice" component={TermsOfService} />  */}

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

