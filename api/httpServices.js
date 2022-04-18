import axios from 'axios';
import { toast } from 'react-toastify';
// const api= axios.create({
//     baseURL:'https://newsapi.org/v2'
// })
// const api_key = '9bf9d9cafee54414ae25b96444f7ffaf'


// export const fetchSources = async () => {
//     // const requestSource = `sources?apiKey=${api_key}`;
//     try {
//         const { data: { sources } } = await api.get(`/sources?apiKey=${api_key}`);

//         // return sources.map((source) => source);
//         return sources
//     } catch (error) {
//         return error;
//     }
// };

// export const fetchNews = async (request) => {   
//     try {
//         const { data: { articles } } = await api.get(`/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api_key}`);

//         // return articles.map((article) => (article));
        
//         return articles
        
//     } catch (error) {
//         return error;
//     }
// };

axios.interceptors.response.use(null, error =>{
    const  ExpectedError = error.response && error.response.status  >= 400  && error.response.status <=500;
    if(!ExpectedError){
        console.log("logging the error", error);

        toast("An unexpected error occurred ");
        
    }
    return Promise.reject(error);


});


export default{
    get:axios.get, 
}