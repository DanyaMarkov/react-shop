import axios from "axios";

// eslint-disable-next-line no-unused-vars
const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    withCredentials: false,
    //withCredentials  это Boolean который определяет, должны ли создаваться кросс-доменные Access-Control запросы	
    baseURL: "https://fortniteapi.io/v2/items/",
    headers: {
        // "API-KEY": "42d9bd21-e65d4a08-1800eb75-3adcf760",
        // "Authorization": API_KEY
        "Authorization": "42d9bd21-e65d4a08-1800eb75-3adcf760"
    }
});

export const shopAPI = {
    async getProducts(language = "ru") {
        const response = await instance.get(`upcoming?lang=${language}`);
        console.log("Запрос ПРОШЕЛ")
        return response.data.items;

    },

    // async getDescription(movieID = "111") {
    //     const response = await instance.get(`?apikey=d2aefa25&i=${movieID}&plot=full`);
    //     return response.data;
    // },

}