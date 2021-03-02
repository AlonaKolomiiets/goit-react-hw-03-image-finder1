import React, { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return (
    <div onClick={toggleModal} className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

export default Modal;
