import React from "react";
import './index.css';
import PropTypes from "prop-types";
import {EventBtn} from "../index";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//What if I created buttons instead with the message and the date.
//When you click on it it opens a modal to display the information about the meeting or lake
//I can order the buttons by priority, put in some logic to hide buttons when the date has passed

function clickHandler (event) {
    //open modal displaying the selected event
}

const ClubEventsContainer = ({events}) => {
    return <EventBtn event = {event} handler = {clickHandler}/>
};

ClubEventsContainer.propTypes = {
    event: PropTypes.shape({
        type: PropTypes.string,
        date: PropTypes.string,
        location: PropTypes.string,
        lake: PropTypes.string,
        address: PropTypes.string,
    })
};

export default ClubEventsContainer;
