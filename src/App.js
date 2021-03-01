import styles from "./App.module.css";
import Button from "./components/Button/Button";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import axios from "axios";
const keyApi = "18623540-b96dabcd57ccb87763c2123d9";
class App extends Component {
  state = {
    images: [],
    page: 1,
    quary: "forest",
  };

  componentDidMount() {
    const { quary, page } = this.state;
    const baseUrl = `https://pixabay.com/api/?q=${quary}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`;

    axios.get(baseUrl).then((response) => console.log(response));
  }

  render() {
    return (
      <div className={styles.App}>
        <Searchbar></Searchbar>
        <Button></Button>
      </div>
    );
  }
}

export default App;
