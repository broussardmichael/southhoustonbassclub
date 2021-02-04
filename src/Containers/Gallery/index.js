import './index.css';
import React from "react";
import {Photo} from "../../Components"
import {getPhotos} from "../Actions";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gallery: []};
    }

    componentDidMount() {
        getPhotos().then((getGalleryPhotosAction) => {
            if(getGalleryPhotosAction.type === 'gallery/getPhotos')
                this.setState({gallery: getGalleryPhotosAction.payload});
        }).catch((error)=>{
            console.log(error);
        })
    }

    render() {
        return <div className = "gallery-container">{this.state.gallery.map(function(imageJSON) {
            return <Photo key = {imageJSON.id} src = {process.env.PUBLIC_URL + imageJSON.src} label = {imageJSON.label} description = {imageJSON.description}/>
        })}
        </div>
    }
}

export default Gallery;