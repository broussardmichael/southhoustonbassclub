import './index.css';
import React from "react";
import {Photo} from "../../Components"
import {getPhotos} from "../Actions";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: []};
    }

    componentDidMount() {
        getPhotos().then((getGalleryPhotosAction) => {
            if(getGalleryPhotosAction.type === 'gallery/getPhotos')
                this.setState({images: getGalleryPhotosAction.payload});
        }).catch((error)=>{
            console.log(error);
        })
    }

    render() {
        return <div className = "gallery-container">{this.state.images.map(function(imageJSON) {
            return <Photo key = {imageJSON._id} src = {process.env.PUBLIC_URL + imageJSON.src} label = {imageJSON.label} description = {imageJSON.description}/>
        })}
        </div>
    }
}

export default Gallery;