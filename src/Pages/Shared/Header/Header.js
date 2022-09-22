import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='navbar'>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} width={150} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-text">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Reviews" id="collasible-nav-dropdown" className='dropdown-nav'>
                                <NavDropdown.Item className='drop-nav' href="#action/3.1">customer Review</NavDropdown.Item>
                                <NavDropdown.Item className='drop-nav' href="#action/3.2">
                                    Services
                                </NavDropdown.Item>
                                <NavDropdown.Item className='drop-nav' href="#action/3.3">Satisfaction</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Nav className='nav-text'>
                        {
                                user && <>
                                    <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                           
                            {
                                user ?
                                    <button onClick={handleSignOut} className='sign-out'>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;