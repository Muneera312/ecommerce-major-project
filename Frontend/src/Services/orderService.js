import api from "./api";

// Checkout (Create Order)
export const checkout = (userId) => {
    return api.post(`/orders/checkout?userId=${userId}`);
};

// Get all orders of a user
export const getOrders = (userId) => {
    return api.get(`/orders/${userId}`);
};

// Create Razorpay Order
export const createPaymentOrder = (amount) => {
    return api.post(`/payment/create-order?amount=${amount}`);
};

// Verify Payment
export const verifyPayment = (razorpayOrderId, paymentId) => {
    return api.post(
        `/payment/verify?razorpayOrderId=${razorpayOrderId}&paymentId=${paymentId}`
    );
};

export const getAllOrders=()=>{
    return api.get("/orders/admin");
};