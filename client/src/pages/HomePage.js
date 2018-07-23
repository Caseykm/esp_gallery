import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import GalleryCarousel from './GalleryCarousel';
import Footer from './Footer';
 

 



 
// ReactDOM.render(<GalleryCarousel />, document.querySelector('.gallery-carousel'));

// CALLING THE CAROSEL FROM GalleryCarosel.js AND RENDERING IT ON THE HOME PAGE
export default () => (<div>

   
    <h2 className="PageHeader ">Virtual Gallery</h2>

    <h1 className="PageHeader">Retrospective 2018</h1>
    {/* <h3 className="PageHeader">{exhibitionName}</h3> */}
    <p className="PageHeader">Mark Elliott Lou Steer Will Coles</p>
    {/* <p className="PageHeader">{artistName}</p>
       */}
      
    <GalleryCarousel />  
 
    
   


   
    
    <Footer /> 
 </div>

);
 
