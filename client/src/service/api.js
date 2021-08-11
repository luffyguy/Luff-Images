import axios from "axios";
import { api_key, url } from "./data";

console.log(api_key.value, url);
const API_KEY = api_key;
const URL = url;

export const getImages = (search, count) => {
  try {
    const data = axios.get(
      `${URL}/?key=${API_KEY}&q=${search}&image_type=all&per_page=${count}&safesearch=true`
    );
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};
