// import React, { useState } from "react";

// const CalendlyModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleModal}>Schedule a Meeting</button>
//       {isOpen && (
//         <div style={modalStyle}>
//           <div style={modalContentStyle}>
//             <iframe
//               src="https://calendly.com/elizabeth_shapiro/gcu"
//               style={iframeStyle}
//               frameborder="0"
//             ></iframe>
//             <button onClick={toggleModal} style={closeButtonStyle}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Styles
// const modalStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const modalContentStyle = {
//   position: "relative",
//   width: "90%",
//   maxWidth: "600px",
//   backgroundColor: "#fff",
//   padding: "20px",
// };

// const iframeStyle = {
//   width: "100%",
//   height: "600px",
// };

// const closeButtonStyle = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
// };

// export default CalendlyModal;

import React from "react";
import Modal from "react-modal";

const CalendlyModal = ({ isOpen, onClose }) => {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      <button onClick={onClose}>Close</button>
      <iframe
        src="/https://calendly.com/dane-scozzari/30min"
        width="100%"
        height="100%"
      />
    </Modal>
  );
};

export default CalendlyModal;
