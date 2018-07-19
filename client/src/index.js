import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

// SLIDER

// import { render } from "react-dom";
// import Carousel from "./Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const App = () => (
//   <div>
//     <Carousel />
//   </div>
// );

// render(<App />, document.getElementById("root"));

// END SLIDER

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
