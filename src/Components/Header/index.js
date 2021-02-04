import './index.css';
import React from "react";
import {Row, Col} from 'react-bootstrap';
import {NavBar, LogoLink} from "../index";

/**
 * Header - functional component that composes logo and NavBar
 * Header doesn't have a state. It's merely passing props.
 */

const Header = () => {
    return <Row className="header sticky-top">
        <Col>
            <Row>
                <Col className = "header-logo">
                    <LogoLink href="/" img={process.env.PUBLIC_URL + '/SHBCLogo.png'}/>
                </Col>
                <Col lg={9}>
                    <NavBar/>
                </Col>
            </Row>
        </Col>
    </Row>
}

export default Header;
