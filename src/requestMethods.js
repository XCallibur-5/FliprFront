import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

const user =  JSON.parse(localStorage.getItem('authorized'));

const TOKEN = user
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});