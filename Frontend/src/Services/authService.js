import axios from "axios";

const REGISTER_URL = "https://ecommerce-major-project-production.up.railway.app/users/register";
const LOGIN_URL = "https://ecommerce-major-project-production.up.railway.app/auth/login";

export const registerUser = async (userData)=>{
    return axios.post(REGISTER_URL, userData);
};

export const loginUser = async(userData) =>{
    return axios.post(LOGIN_URL, userData);
};


