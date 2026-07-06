import api from "./api";

export const addToCart = (userId, productId , quantity)=> {
    return api.post(`/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`);
};

export const getCart = (userId)=> {
    return api.get(`/cart/${userId}`);
};

export const removeCartItem =(itemId)=>{
    return api.delete(`/cart/remove/${itemId}`);
};

export const updateQuantity = (itemId,quantity)=>{
    return api.put(`/cart/update/${itemId}?quantity=${quantity}`);
};




