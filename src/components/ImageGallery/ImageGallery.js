import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images,isLoading }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, largeImageURL, previewURL, type }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            previewURL={previewURL}
            type={type}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
