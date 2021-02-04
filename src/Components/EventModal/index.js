import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import './index.css';
import PropTypes from "prop-types";
import ClubEvent from "../ClubEvent";

const EventModal = ({show, event, hideHandler}) => {
    return <Modal show={show} onHide={hideHandler} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title>{(event.type === "meeting" ? "Meeting" : "Tournament")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ClubEvent event = {event}/>
        </Modal.Body>
    </Modal>
};

EventModal.propTypes = {
    show: PropTypes.bool,
    hideHandler: PropTypes.func,
    event: PropTypes.shape({
        type: PropTypes.string,
        date: PropTypes.string,
        location: PropTypes.string,
        lake: PropTypes.string,
        address: PropTypes.string,
    })
};

export default EventModal;