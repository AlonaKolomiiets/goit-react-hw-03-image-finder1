import styles from "./App.module.css";
import Button from "./components/Button/Button";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import rest from "./services/rest";

class App extends Component {
  state = {
    images: [],
    searchQuary: "",
    currentPage: "",
    isLoading: true,
    error: false,
  };

  // componentDidMount() {
  //   const { searchQuary, currentPage } = this.state;
  //   rest(searchQuary, currentPage).then(({ data }) =>
  //     this.setState({ images: data.hits })
  //   );
  // }
  async componentDidUpdate(prevProps, prevState) {
    const { searchQuary, currentPage } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      searchQuary !== prevState.searchQuary
    ) {
      try {
        const result = await rest(searchQuary, currentPage);
        console.log(result);
        this.setState((prevState) => ({
          images: [...prevState.images, ...result.data.hits],
          // currentPage: currentPage + 1,
          isLoading: false,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      } catch {
        this.setState({
          error: true,
          isLoading: false,
        });
      }
    }
  }

  loadMore = () => {
    // const { currentPage,images } = this.state;
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  onSubmit = (quary) => {
    this.setState({ searchQuary: quary, currentPage: 1 });
  };

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {error && <h2>Something wrong!!!</h2>}
        {isLoading ? <Loader /> : <ImageGallery images={images}></ImageGallery>}
        {shouldRenderLoadMoreButton && (
          <Button loadMore={this.loadMore}></Button>
        )}
      </div>
    );
  }
}

export default App;
