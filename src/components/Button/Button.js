import React from "react";
import styles from "./Button.module.css";

const Button = ({ loadMore }) => {
  return (
    <div className={styles.Container}>
      <button onClick={loadMore} className={styles.Button} type="button">
        Load more
      </button>
    </div>
  );
};

export default Button;
