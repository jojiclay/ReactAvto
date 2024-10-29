import React from "react";
import Modal from "react-modal";
import { ReactComponent as CloseIcon } from "../assets/close-icon.svg";
import "../CustomModal/CustomModal.css";

export const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={"modal-overlay"}
      className={"modal-content"}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <button className="modal-close-button" onClick={() => onClose()}>
        <CloseIcon /> 
      </button>
      {children}
    </Modal>
  
  );
};