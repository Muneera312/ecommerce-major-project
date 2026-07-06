import { useState } from "react";
import { useLocation } from "react-router-dom";
import { checkout } from "../Services/orderService";
import { verifyPayment } from "../Services/paymentService";


function Checkout() {
    
    const location = useLocation();

    const cart = location.state?.cart;
    const total = location.state?.grandTotal || 0;
    const handleCheckout = async () => {
    try {
        const userId = localStorage.getItem("userId");

        const response = await checkout(userId);

        const order = response.data;

        const options = {
            key: "rzp_test_T7qmu1uGV0MLsH",

            amount: order.totalAmount * 100,

            currency: "INR",

            name: "E-Commerce",

            description: "Order Payment",

            order_id: order.razorpayOrderId,

            handler: async function (paymentResponse) {

                await verifyPayment(
                    paymentResponse.razorpay_order_id,
                    paymentResponse.razorpay_payment_id
                );

                alert("Payment Successful!");

                window.location.href = "/";
            },

            theme: {
                color: "#3399cc"
            }
        };

        const razorpay = new window.Razorpay(options);

        razorpay.open();

    } catch (error) {
        console.error(error);
        alert("Checkout Failed");
    }
};
    

    const [customer, setCustomer] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    

    return (
        <div className="container mt-5">

            <div className="row">

                <div className="col-md-7">

                    <div className="card shadow p-4">

                        <h3 className="mb-4">
                            Shipping Details
                        </h3>

                        <input
                            className="form-control mb-3"
                            name="fullName"
                            placeholder="Full Name"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />

                        <textarea
                            className="form-control mb-3"
                            name="address"
                            placeholder="Address"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="city"
                            placeholder="City"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="state"
                            placeholder="State"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="pincode"
                            placeholder="Pincode"
                            onChange={handleChange}
                        />

                    </div>

                </div>

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h3>Order Summary</h3>

                        <hr />
                        <h5 className="mb-3">Items</h5>

{cart?.items.map(item => (
    <div
        key={item.id}
        className="d-flex justify-content-between mb-2"
    >
        <span>
            {item.product.name} × {item.quantity}
        </span>

        <span>
            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
        </span>
    </div>
))}

                   <hr />

<h4 className="text-success">
    Total: ₹{total.toLocaleString("en-IN")}
</h4>     

                        <button
                            className="btn btn-primary w-100 mt-4"
                            onClick={handleCheckout}
                        >
                            Proceed to Payment
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Checkout;