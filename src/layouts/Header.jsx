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
        <div className="fixed top-0 w-[100vw] z-30 p-3 left-[13%]">
        <Navbar expand="lg" className=" border-2 border-white rounded-3xl w-[70%] bg-body-text-body-tertiary p-3 "
         style={{ background: "rgba(0, 255, 213, 0.331)" }}
        >
            <Container className="lg:flex  lg:gap-[20%] sm:flex sm:flex-row sm:gap-0 lg:justify-between">
            <Navbar.Brand href="#home">
                <span className="text-4xl  text-white font-extrabold w-[25vw]">
                    <span className="text-blue-900">M</span>E
                    <span className="text-blue-900">.</span>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto font-bold flex text-xl gap-4">
                <Nav.Link
                    href="#Home"
                    onClick={() => handleNavClick("Home")}
                    style={{ color: activeLink === "Home" ? "#1e3a8a" : "#ffffff" , fontFamily: 'CreativeTypography' }} // Custom color
                >
                    Home
                </Nav.Link>
                <Nav.Link
                    href="#SKILLS"
                    onClick={() => handleNavClick("Skills")}
                    style={{ color: activeLink === "Skills" ? "#1e3a8a" : "#ffffff" , fontFamily: 'CreativeTypography' }} // Custom color
                >
                    Skills
                </Nav.Link>
                <Nav.Link
                    href="#Projects"
                    onClick={() => handleNavClick("Projects")}
                    style={{ color: activeLink === "Projects" ? "#1e3a8a" : "#ffffff" , fontFamily: 'CreativeTypography' }} // Custom color
                >
                    Projects
                </Nav.Link>
                <Nav.Link
                    href="#Contact"
                    onClick={() => handleNavClick("Contact")}
                    style={{ color: activeLink === "Contact" ? "#1e3a8a" : "#ffffff",fontFamily: 'CreativeTypography' }} // Custom color
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