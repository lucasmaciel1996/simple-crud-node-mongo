import Axios from "axios";

const api = Axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "https://rocketseat-node.herokuapp.com/api",
});

export default api;
