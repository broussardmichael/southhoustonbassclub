import './index.css';
import React from "react";
import PropTypes from "prop-types";

const ClubOfficer = ({title, name, email, canContact}) => {
    let contactLink = canContact ? `mailto:${email}?subject=Contacting SHBC ${title}` : '';
    let officerNameObj;
    if(canContact) {
        officerNameObj = <a href = {contactLink} target="_blank" rel="noopener noreferrer" className = "officer-name">{name}</a>;

    } else {
        officerNameObj = <div className = "officer-name">{Array.isArray(name) ? name.join(", ") : name}</div>;
    }
    return <div className = "club-officers">
        <div className = "officer-title">{title}</div>
        {officerNameObj}
    </div>;
};

ClubOfficer.propTypes = {
    title: PropTypes.string,
    email: PropTypes.string,
    canContact: PropTypes.bool,
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
};

export default ClubOfficer;