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

  color: white;
`;

const Logo = styled.h1`
  margin-bottom: 1rem; // Adjust space between logo and nav links
`;

// Updated Nav component for horizontal layout
const Nav = styled.nav`
  display: flex;
  justify-content: center; // Center the links horizontally
  a,
  .nav-link {
    color: white;
    text-decoration: none;
    margin: 0 15px; // Adjust spacing between links
  }

  .dropdown-menu {
    background-color: #333; // Example dropdown background color
  }

  .dropdown-item {
    color: white; // Example dropdown item text color

    &:hover {
      background-color: #444; // Example hover background color
    }
  }
`;

const CustomDropdownToggle = styled(DropdownToggle)`
  background: transparent !important;
  color: white !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 15px; // Adjust spacing as needed

  &:hover,
  &:focus {
    background: transparent !important;
    color: #aaa !important; // Example hover color
  }
`;

const Header = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);
  // const toggleModal = () => setModalIsOpen(!modalIsOpen);
  // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <HeaderContainer className="header">
      <Link to="/home" className="header-name">
        SCOZZARI SOUNDS
      </Link>
      <>
        <div className="nav-list">
          <Link to="/home" className="nav-link nav-option">
            Home
          </Link>
          <Dropdown
            className="nav-link nav-option drop-link"
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
            inNavbar
          >
            <CustomDropdownToggle className="nav-option">
              Services
            </CustomDropdownToggle>
            <DropdownMenu className="dropdown" right>
              <DropdownItem>
                <Link
                  className="nav-option"
                  to="/karaoke"
                  onClick={() => setDropdownOpen(false)}
                >
                  Karaoke
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  className="nav-option"
                  to="/band"
                  onClick={() => setDropdownOpen(false)}
                >
                  Band
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  className="nav-option"
                  to="/DJ"
                  onClick={() => setDropdownOpen(false)}
                >
                  DJ
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Link to="/testimonials" className="nav-link nav-option">
            Testimonials
          </Link>
          {/* <Link to="/contact" className="nav-link nav-option">
            Contact
          </Link> */}
          <button className="contact-button" onClick={openModal}>
            Schedule a Call
          </button>
        </div>

        <CalendlyEmbed
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          url="https://calendly.com/dane-scozzari/30min"
        />
      </>
    </HeaderContainer>
  );
};

export default Header;
// import { React, useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import CalendlyEmbed from "./CalendlyEmbed";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Styled-components for styling
// const HeaderContainer = styled.header`
//   color: #fff;
//   padding: 1rem;
//   text-align: center;

//   // Media query for larger screens
//   @media (min-width: 768px) {
//     padding: 1.5rem;
//   }
// `;

// const Logo = styled.h1`
//   font-size: 1.5rem;
//   margin: 0;

//   // Media query for larger screens
//   @media (min-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Nav = styled.nav`
//   margin-top: 1rem;

//   // Media query for larger screens
//   @media (min-width: 768px) {
//     margin-top: 0;
//   }
// `;

// const Header = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleModal = () => setModalIsOpen(!modalIsOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const openModal = () => setModalIsOpen(true);
//   const closeModal = () => setModalIsOpen(false);
//   return (
//     <HeaderContainer className="header">
//       <Logo className="header-name">SCOZZARI SOUNDS</Logo>
//       <Nav>
//         <Link to="/home" className="nav-option">
//           Home
//         </Link>

//         <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
//           <DropdownToggle caret className="nav-option services-option">
//             Services
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>
//               <Link to="/Karaoke" onClick={toggleDropdown}>
//                 Karaoke
//               </Link>
//             </DropdownItem>
//             <DropdownItem>
//               <Link to="/Band" onClick={toggleDropdown}>
//                 Band
//               </Link>
//             </DropdownItem>
//             <DropdownItem>
//               <Link to="/DJ" onClick={toggleDropdown}>
//                 DJ
//               </Link>
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>

//         <Link to="/testimonials" className="nav-option">
//           Testimonials
//         </Link>
//         <button className="contact-button" onClick={openModal}>
//           Schedule a Call
//         </button>
//       </Nav>
//       <CalendlyEmbed
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         url="https://calendly.com/dane-scozzari/30min"
//       />
//     </HeaderContainer>
//   );
// };

// export default Header;

// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="/">Services</Link>
// //         </li>
// //         <li>
// //           <Link onClick={() => setIsOpen(!isOpen)}>Services</Link>
// //           {isOpen && (
// //             <ul>
// //               <li>
// //                 <Link to="/about" onClick={() => setIsOpen(false)}>
// //                   Karaoke
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/contact" onClick={() => setIsOpen(false)}>
// //                   Band
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/contact" onClick={() => setIsOpen(false)}>
// //                   DJ
// //                 </Link>
// //               </li>
// //             </ul>
// //           )}
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// {
//   /* <>
//           <Link className="nav-option" onClick={() => setIsOpen(!isOpen)}>
//             Services
//           </Link>
//           {isOpen && (
//             <ul>
//               <li>
//                 <Link
//                   to="/Karaoke"
//                   className="nav-option"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Karaoke
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Band"
//                   className="nav-option"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Band
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/DJ"
//                   className="nav-option"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   DJ
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </> */
// }
