import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;