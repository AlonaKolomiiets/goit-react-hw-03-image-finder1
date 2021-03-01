import React from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({onSubmit}) => {
  return (
    <form className={styles.SearchForm}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SearchForm;
