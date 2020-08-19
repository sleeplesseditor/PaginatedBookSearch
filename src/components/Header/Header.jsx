import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar
            bg="dark" 
            variant="dark"
            fixed="top"
        >
            <Navbar.Brand>
                Greek Book Search
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;