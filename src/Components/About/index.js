import React from "react";
import PropTypes from 'prop-types'
import './index.css';

import ReactHtmlParser from 'react-html-parser';

const About = ({clubinformation}) => {return <div className = "about-container">{ReactHtmlParser(clubinformation)}</div>};

About.propTypes = {
    clubinformation: PropTypes.string
};

export default About;