import './index.css';
import React from "react";
import {Row, Col} from 'react-bootstrap';
import PropTypes from "prop-types";

const Content = ({children}) => {
    return <Row className = "content">
        <Col>{children}</Col>
    </Row>;
}

Content.propTypes = {
    children: PropTypes.element
};

export default Content;