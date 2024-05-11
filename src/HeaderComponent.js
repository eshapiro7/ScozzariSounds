import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendlyEmbed from "./CalendlyEmbed";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: white; // Ensures all text within the header, including the logo, is white
`;

const Logo = styled.h1`
  font-size: 2rem; /* Adjust the font size for mobile */
  color: white; /* Explicitly setting the color to white */
  @media (min-width: 768px) {
    font-size: 4rem; /* Larger font size for desktop */
  }
`;

const Nav = styled.nav`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  font-family: Raleway;

  @media (min-width: 768px) {
    display: flex; /* Always display the nav on tablet and desktop */
    flex-direction: row; /* Make nav items line horizontally */
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0.5rem;
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-family: Raleway;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none; /* Hide the hamburger button on larger screens */
  }
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  background: transparent !important;
  color: white !important;
  border: none !important;
  padding: 0 !important;
  margin: 0.5rem;
`;

const ContactButton = styled.button`
  margin-top: 1rem; /* Adds space above the button on small screens */
  @media (min-width: 768px) {
    margin-top: 0; /* Resets the margin for larger screens */
  }
`;

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Initially true to show on medium to xl screens

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setShowMenu(!showMenu); // Function to toggle menu visibility on small screens

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <HeaderContainer className="header">
      <Logo className="header-name">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          SCOZZARI SOUNDS
        </Link>
      </Logo>
      <HamburgerButton onClick={toggleMenu}>
        {showMenu ? "Menu" : "Menu"}
      </HamburgerButton>
      <Nav show={showMenu || window.innerWidth >= 768}>
        <NavLink to="/home">Home</NavLink>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} inNavbar>
          <CustomDropdownToggle>Services</CustomDropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to="/karaoke" onClick={() => setDropdownOpen(false)}>
                Karaoke
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/band" onClick={() => setDropdownOpen(false)}>
                Band
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/DJ" onClick={() => setDropdownOpen(false)}>
                DJ
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink className="contact-button" onClick={openModal}>
          {" "}
          Schedule a Call
        </NavLink>
      </Nav>
      <CalendlyEmbed
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        url="https://calendly.com/dane-scozzari/30min"
      />
    </HeaderContainer>
  );
};

export default Header;
