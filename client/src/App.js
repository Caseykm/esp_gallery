import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav' // Importing from  Nav.js
import './App.css'; // Importing from App.css 
import logo from './logo.svg';


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // Calling the NAV from nav.js
  render() {
    return (
      <Router>
        <div>

           <Nav/>

           <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
           <Route exact path="/sellart" component={SellArt} /> 
          <Route exact path="/about" component={About} />
          <Route exact path="/contactus" component={ContactUs} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} /> */}
          {/* <Route exact path="/product" component={ProductPage} />  */}
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const SellArt = () => (
  <div>
    <h2>Sell Art</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About Us</h2>
  </div>
);

const ContactUs = () => (
  <div>
    <h2>Contact US</h2>
  </div>
);

const Shop = ({ match }) => (
  <div>
    <h2>Gallery Shop</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:shopId`} component={Shop} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
