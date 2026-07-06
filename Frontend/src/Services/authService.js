import axios from "axios";

const REGISTER_URL = "http://localhost:8080/users/register";
const LOGIN_URL = "http://localhost:8080/auth/login";

export const registerUser = async (userData)=>{
    return axios.post(REGISTER_URL, userData);
};

export const loginUser = async(userData) =>{
    return axios.post(LOGIN_URL, userData);
};


