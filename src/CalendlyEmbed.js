import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Assuming your app root element has an ID of 'root'

const CalendlyEmbed = ({ isOpen, onRequestClose, url }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%", // Responsive width
      height: "80%", // Responsive height
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <iframe src={url} width="100%" height="100%" frameborder="0"></iframe>
    </Modal>
  );
};

export default CalendlyEmbed;
