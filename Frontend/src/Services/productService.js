import api from "./api";
const API_URL = "https://ecommerce-major-project-production.up.railway.app/products";

export const getAllProducts = () => {
    return api.get("/products");
};

export const getProductById = (id) => {
    return api.get(`/products/${id}`);
};

export const addProduct = (product) => {
    return api.post("/products", product);
};

export const updateProduct = (id, product) => {
    return api.put(`/products/${id}`, product);
};

export const deleteProduct = (id) => {
    return api.delete(`/products/${id}`);
};