    import React, { useState } from "react";
    import Container from "react-bootstrap/Container";
    import Nav from "react-bootstrap/Nav";
    import Navbar from "react-bootstrap/Navbar";

    export const Header = () => {
    const [activeLink, setActiveLink] = useState("Home");

    const handleNavClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="fixed top-0 w-[100vw] z-30">
        <Navbar expand="lg" className="bg-black bg-body-text-body-tertiary p-3 ">
            <Container className="hello lg:flex lg:gap-80 sm:flex sm:flex-row sm:gap-0 lg:justify-between">
            <Navbar.Brand href="#home">
                <span className="text-4xl text-white font-extrabold w-[25vw]">
                <span className="text-blue-900">M</span>E
                <span className="text-blue-900">.</span>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-xl flex gap-4">
                <Nav.Link
                    href="#Home"
                    onClick={() => handleNavClick("Home")}
                    style={{ color: activeLink === "Home" ? "#1e3a8a" : "#ffffff" }} // Custom color
                >
                    Home
                </Nav.Link>
                <Nav.Link
                    href="#About"
                    onClick={() => handleNavClick("About")}
                    style={{ color: activeLink === "About" ? "#1e3a8a" : "#ffffff" }} // Custom color
                >
                    About
                </Nav.Link>
                <Nav.Link
                    href="#SKILLS"
                    onClick={() => handleNavClick("Skills")}
                    style={{ color: activeLink === "Skills" ? "#1e3a8a" : "#ffffff" }} // Custom color
                >
                    Skills
                </Nav.Link>
                <Nav.Link
                    href="#Contact"
                    onClick={() => handleNavClick("Contact")}
                    style={{ color: activeLink === "Contact" ? "#1e3a8a" : "#ffffff" }} // Custom color
                >
                    Contact
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
    };
