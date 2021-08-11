import axios from "axios";

const API_KEY = "22789350-838f3b11489481688062c97f2";
const URL = "https://pixabay.com/api/";

export const getImages = (search, count) => {
    try {
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${search}&image_type=photo&per_page=${count}&safesearch=true`);
        return data;
    } catch (error) {
        console.log("Error", error);
    }
}

