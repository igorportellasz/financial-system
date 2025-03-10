import axios from "axios";

// Configuração da API Axios com baseURL
export const api = axios.create({
    baseURL: 'http://localhost:3000'
});
