import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosContact } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    
return (
    <div className="fixed top-0 w-[100vw] z-30">
        <Navbar expand="lg" className="bg-black bg-body-text-body-tertiary p-3 ">
            <Container className='hello lg:flex lg:gap-80 sm:flex sm:flex-row sm:gap-0 lg:justify-between'>
                <Navbar.Brand href="#home"><span className='text-4xl text-white font-extrabold w-[25vw]'><span className="text-blue-900">M</span>E<span className='text-blue-900'>.</span></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-xl flex gap-4">
                        <Nav.Link className="text-white" href="#Home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#SKILLS">Skills</Nav.Link>
                        <Nav.Link className="text-white" href="#About"><span className='text-blue-900'>About</span></Nav.Link>
                        <Nav.Link className="text-white"href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    
);
};
