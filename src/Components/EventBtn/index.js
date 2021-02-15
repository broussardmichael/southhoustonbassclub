import React from "react";
import './index.css';
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const EventBtn = ({event, active, showHandler}) => {
    return <Button className = "event-btn" variant={active ? 'success' : ''} onClick = {() => showHandler(event)} size="lg" block>
        <span className = "btn-name">{event.eventType === "meeting" ? "Meeting: " : "Tournament: "}</span>
        <span className = "btn-date">{active ? 'Happening Now' : new Date(event.date).toLocaleDateString(undefined, options)}</span>
    </Button>
};

EventBtn.defaultProps = {
    event: {
        eventType: '',
        date: '',
        location: '',
        lake: '',
        address: '',
        endDate: '',
        launchPoint : '',
        active: false
    }
};

EventBtn.propTypes = {
    showHandler: PropTypes.func,
    active: PropTypes.bool,
    event: PropTypes.shape({
        eventType: PropTypes.string,
        date: PropTypes.string,
        location: PropTypes.string,
        lake: PropTypes.string,
        address: PropTypes.string,
        endDate: PropTypes.string,
        launchPoint: PropTypes.string,
    })
};

export default EventBtn;