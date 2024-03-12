import React from "react";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

// Styled component for the footer

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  text-align: center;
  padding: 20px 0;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  margin: 10px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
`;
const styles = {
  footer: {
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
    padding: "20px 10px",
  },
  socialLinks: {
    margin: "0",
    padding: "0",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Footer = () => {
  return (
    <>
      <FooterContainer className="footer-style">
        <hr />
        <p>
          scozzarisounds@gmail.com <br /> 860-202-7665
        </p>
        <IconWrapper>
          <FaYoutube color="red" />
        </IconWrapper>
        <IconWrapper>
          <FaTiktok color="black" />
        </IconWrapper>
        <IconWrapper>
          <FcGoogle />
        </IconWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
