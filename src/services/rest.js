import axios from "axios";

const keyAPI = "18623540-b96dabcd57ccb87763c2123d9";

const request = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default request;
