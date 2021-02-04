import React from "react";
import './index.css';
import PropTypes from "prop-types";

const Photo = ({id, src, label, description}) => {
    return <div className="shadow p-3 mb-3 photo-container component-container">
        <img className= "photo" key = {id} src={src} alt="Fish Image"/>
        <div className= "photo-label">{label}</div>
        <div className= "photo-description">{description}</div>
    </div>;
};

Photo.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string
};

export default Photo;