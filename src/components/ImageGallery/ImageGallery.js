import React, { useState } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, isLoading, toggleModal, showModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, largeImageURL, previewURL, type }) => {
        return (
          <ImageGalleryItem
            toggleModal={toggleModal}
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
