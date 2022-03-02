import axios from "axios";

// eslint-disable-next-line no-unused-vars
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    withCredentials: false,
    //withCredentials  это Boolean который определяет, должны ли создаваться кросс-доменные Access-Control запросы	
    baseURL: "https://fortniteapi.io/v2/items/",
    headers: {
        "Authorization": API_KEY
    }
});

export const shopAPI = {
    async getProducts(language = "ru") {
        const response = await instance.get(`upcoming?lang=${language}`);
        return response.data.items;
    },
}