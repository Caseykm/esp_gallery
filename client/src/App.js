import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Nav"; // Importing from  Nav.js
import "./App.css"; // Importing from App.css
import logo from "./logo.svg";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./pages/HomePage"; // Imports homepage AKA Virtual Gallery into App.js
import GalleryHire from "./pages/GalleryHire";
import GalleryShop from "./pages/GalleryShop"; // Imports GalleryShop into App.js
import SellArt from "./pages/SellArt"; // Imports SellArt.js into App.js
import About from "./pages/About"; // Imports About.js into App.js
import ContactUs from "./forms/ContactUs"; // Imports ContactUs.js into App.js
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Footer from "./pages/Footer"; // Imports Footer.js into App.js
import TermsOfService from "./pages/TermsOfService";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  // Checks token every page request to check if the users logged in or not
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set current user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  store.dispatch(logoutUser());
  // TODO: Clear current profile

  // Redirect to home
  window.location.href = "/";
}
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
      <Provider store={store}>
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
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/cart" component={Cart} /> */}
            {/* <Route exact path="/product" component={ProductPage} />  */}
            {/* <Route exact path="/footer" component={Footer} /> */}

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
