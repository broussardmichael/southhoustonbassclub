import React from "react";
import './index.css';
import PropTypes from "prop-types";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true};

const ClubEvent = ({event}) => {
    if(event.type === "meeting") {
        return <div className = "event">
            <div className = "event-date"><label>Date: </label><div className = 'event-value'>{new Date(event.date).toLocaleDateString('en-US', options)}</div></div>
            <div className = "event-location"><label>Location: </label><div className = 'event-value'>{event.location}</div></div>
            <div className = "event-address"><label>Address: </label><div className = 'event-value'>{event.address}</div></div>
        </div>;
    } else {
        return <div className="event">
            <div className="event-lake"><label>Lake: </label>
                <div className = 'event-value'>{event.lake}</div>
            </div>
            <div className="event-launch-point"><label>Launch Point: </label>
                <div className = 'event-value'>{event.launchPoint}</div>
            </div>
            <div className="event-startTime"><label>Start Time: </label>
                <div className = 'event-value'>{new Date(event.date).toLocaleString('en-US', options)}</div>
            </div>
            <div className="event-endTime"><label>End Time: </label>
                <div className = 'event-value'>{new Date(event.endDate).toLocaleString('en-US', options)}</div>
            </div>
        </div>;
    }
};
//toDateString

ClubEvent.propTypes = {
    event: PropTypes.shape({
        type: PropTypes.string,
        date: PropTypes.string,
        location: PropTypes.string,
        lake: PropTypes.string,
        address: PropTypes.string,
        endDate: PropTypes.string,
        launchPoint: PropTypes.string
    })
};

ClubEvent.defaultProps = {
    event: {
        type: '',
        date: '',
        location: '',
        lake: '',
        address: '',
        endDate: '',
        launchPoint : ''
    }
};

export default ClubEvent;
