import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <Navbar variant="">
                <Container className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Navbar.Brand href="#home"><img src={logo} height="35px" alt="" /></Navbar.Brand>
                    </div>
                    <div className='nav-links'>
                        
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/about">About</NavLink>
                       
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;