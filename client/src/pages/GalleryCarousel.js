import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// export default () => (<div>

 {/* CALLING ARTWORK / ARTCARD */}
    {/* <list>
        <Artwork title={} image={} ... />
    </list> */}
    {/* END CALLING THE CARD */}
    
class GalleryCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/images/MarkElliot.jpg" />
                    <p className="legend"><a href="https://casscass.github.io./" target="_blank">Legend 1</a></p>
                </div>
                <div>
                    <img src="/images/MarkElliot.jpg" />
                    <p className="legend">Little Sparrows</p>
                    {/* <p className="legend">{artworkName}</p> */}
                </div>
               
                <div>
                    <img src="/images/MarkElliott-whiteIbis.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default GalleryCarousel;

// ReactDOM.render(<GalleryCarousel />, document.querySelector('.gallery-carousel'));


