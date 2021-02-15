import './index.css';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import React from "react";
import {MobileLogo, Logo} from "Images";

/**
 * NavBar - functional component that composes NavBar components
 * The navbar should merely change the url so the router can pickup which link was sent.
 *
 */

const NavBar = () => {
    return <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
            <Navbar.Brand>
                <img src={Logo} alt="Logo" className='navbar-logo-img'/>
                <img src={MobileLogo} alt="Logo" className='navbar-logo-img-mobile'/><span
                className='navbar-logo-brand-mobile'>South Houston Bass Club</span>
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Tournament Results" id="tournament-results-dropdown">
                    <LinkContainer to="/TournamentResults/2021">
                        <NavDropdown.Item>2021</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/TournamentResults/2020">
                        <NavDropdown.Item>2020</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/TournamentResults/2019">
                        <NavDropdown.Item>2019</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/TournamentResults/2018">
                        <NavDropdown.Item>2018</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/TournamentResults/2017">
                        <NavDropdown.Item>2017</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/Gallery">
                    <Nav.Link className="link">Photo Gallery</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Membership">
                    <Nav.Link className="link">Membership</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default NavBar;