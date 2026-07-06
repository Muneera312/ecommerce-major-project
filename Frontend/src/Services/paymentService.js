import api from "./api";

export const createOrder = (amount) => {
    return api.post(`/payment/create-order?amount=${amount}`);
};

export const verifyPayment = (razorpayOrderId, paymentId) => {
    return api.post(
        `/payment/verify?razorpayOrderId=${razorpayOrderId}&paymentId=${paymentId}`
    );
};