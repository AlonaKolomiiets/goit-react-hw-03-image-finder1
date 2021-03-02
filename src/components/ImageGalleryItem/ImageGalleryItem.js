import React from "react";
import styles from "./ImageGalleryItem.module.css";
// import Modal from "../Modal/Modal";

const ImageGalleryItem = ({
  id,
  largeImageURL,
  previewURL,
  type,
  toggleModal,
}) => {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        onClick={() => toggleModal(largeImageURL)}
        src={previewURL}
        alt={type}
        // data-largeImage={largeImageURL}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
