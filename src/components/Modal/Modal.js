import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ src, alt }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
