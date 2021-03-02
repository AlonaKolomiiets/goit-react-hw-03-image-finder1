import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, largeImageURL, previewURL,type }) => {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img src={previewURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
