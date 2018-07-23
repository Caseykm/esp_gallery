import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import GalleryCarousel from './GalleryCarousel';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from './Footer';
 

// ReactDOM.render(<GalleryCarousel />, document.querySelector('.gallery-carousel'));

// CALLING THE CAROSEL FROM GalleryCarosel.js AND RENDERING IT ON THE HOME PAGE
export default () => (<div>

   
    <h2 className="PageHeader virtualGallery">Virtual Gallery</h2>

    <h1 className="PageHeader exhibitionName">Retrospective 2018</h1>
    {/* <h3 className="PageHeader">{exhibitionName}</h3> Exhibition name is is called from froms/Uploadexhibiton.js */} 
  
    <p className="PageHeader">Mark Elliott Lou Steer Will Coles </p>
    {/* <p className="PageHeader">{artistName}</p> Artists name is is called from froms/Uploadexhibiton.js*/}
      
    <GalleryCarousel /> 
    
    <span className="GoToShopButton">   
                     <a href="/shop/"><Button>Go To Shop</Button></a>
                    </span> 
    
    <Footer /> 
 </div>

);
 
