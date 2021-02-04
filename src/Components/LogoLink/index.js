import './index.css';
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Logo} from 'Images';

const LogoLink = (props) => {
    return <Link to={props.href} className='logo-link'>
        <img src={Logo} alt="Logo" className='logo-img'/>
    </Link>
}

LogoLink.propTypes = {
    href: PropTypes.string,
    img: PropTypes.string,
}
;
export default LogoLink;