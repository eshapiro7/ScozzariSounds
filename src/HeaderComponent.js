import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled-components for styling
const HeaderContainer = styled.header`
  color: #fff;
  padding: 1rem;
  text-align: center;

  // Media query for larger screens
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  // Media query for larger screens
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  margin-top: 1rem;

  // Media query for larger screens
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="header">
      <Logo className="header-name">SCOZZARI SOUNDS</Logo>
      <Nav>
        <Link to="/home" className="nav-option">
          Home
        </Link>
        <Link to="/services" className="nav-option">
          Services
        </Link>
        <Link to="/testimonials" className="nav-option">
          Testimonials
        </Link>
        <Link className="nav-option" to="/contact">
          <button className="nav-option contact-button">Schedule a Call</button>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
