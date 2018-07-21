// DESCRIBING WHAT IS ON THE ART CARDS
import React from 'react'
import { Link } from 'react-router-dom'


export class Artwork extends React.component {
    render() {
        return (
            // <ArtCard>
                <div>
                    <h3>{this.props.title}</h3>
                    <img src={this.props.artwork}/>
                    <p>{this.props.description}</p>
                    <h2>{this.props.price}</h2>
                    <h2>{this.props.catagory}</h2>
                    <h2>{this.props.dimentions}</h2>
                    <h2>{this.props.artist}</h2>
                </div>
            // </ArtCard>
        );
    }
};

ReactDOM.render(<Artwork/>, getElementById('app')
);

// TO RENDER THE CARDS CALL THEM <Artwork title = {title} />

// const Artwork = ({
//     _id,
//     title,
//     image,
//     description,
//     price,
//     catagory,
//     artist,

// }) => {
//     return (<div>
//         <Link to={`/artwork/${_id}`}>{title}</Link>
//         <Image {...image} />
//         <Description {...description} />
//         <Price {...price} />
//         <Catagory {...catagory} />
//         < Artist {... artist} />
//     </div>)
// }

export default artCard

//  this is the schema in api/models/artwork.js
// const ArtworkSchema = Schema({ //Artwork schema
//     title: String,
//     image: Text,
//     description: Text,
//     price: Number,
//     catagory: String, 
//     artist: { // The db will auto add an artist _id 
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     } 
// })
