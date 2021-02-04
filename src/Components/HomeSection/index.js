import './index.css';
import React from "react";
import PropTypes from "prop-types";

const HomeSection = (props) => {
    return <div className = "shadow p-3 mb-3 home-section component-container">
        <h2>{props.header}</h2>
        <div className = "home-item-container">
            {props.children}
        </div>
    </div>;
};

HomeSection.propTypes = {
    header: PropTypes.string,
    children: PropTypes.array
};

export default HomeSection;