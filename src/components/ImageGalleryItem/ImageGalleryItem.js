import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ previewURL, tags, toggleModal }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      onClick={toggleModal}
      src={previewURL}
      alt={tags}
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;
