import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.bestbuy.com/v1",
});

export default instance;
