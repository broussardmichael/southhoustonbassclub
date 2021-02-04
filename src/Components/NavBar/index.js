import './index.css';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import React from "react";
import {MobileLogo, Logo} from "Images";

/**
 * NavBar - functional component that composes NavBar components
 * The navbar should merely change the url so the router can pickup which link was sent.
 *
 */

const NavBar = () => {
    return <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img src={Logo} alt="Logo" className='navbar-logo-img'/>
                <img src={MobileLogo} alt="Logo" className='navbar-logo-img-mobile'/><span className = 'navbar-logo-brand-mobile'>South Houston Bass Club</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Tournament Results" id="tournament-results-dropdown">
                        <NavDropdown.Item href="/TournamentResults/2021">2021</NavDropdown.Item>
                        <NavDropdown.Item href="/TournamentResults/2020">2020</NavDropdown.Item>
                        <NavDropdown.Item href="/TournamentResults/2019">2019</NavDropdown.Item>
                        <NavDropdown.Item href="/TournamentResults/2018">2018</NavDropdown.Item>
                        <NavDropdown.Item href="/TournamentResults/2017">2017</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link to="/Gallery" className="link" href="/Gallery">Photo Gallery</Nav.Link>
                    <Nav.Link to="/Membership" className="link" href="/Membership">Membership</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
}

export default NavBar;