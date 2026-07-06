import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getOrders } from "../Services/orderService";

function MyOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const userId = localStorage.getItem("userId");

        getOrders(userId)
            .then((response) => {
                setOrders(response.data);
            })
            .catch(console.error);

    }, []);

    return (
        <>
            

            <div className="container my-5">

                <h2 className="mb-4">My Orders</h2>

                {orders.length === 0 ? (

                    <div className="alert alert-info">
                        You have not placed any orders yet.
                    </div>

                ) : (

                    orders.map((order) => (

                        <div key={order.id} className="card shadow mb-4">

                            <div className="card-body">

                                <h5>Order #{order.id}</h5>

                                <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(order.orderDate).toLocaleString()}
                                </p>

                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span className={
                                        order.status === "PAID"
                                            ? "text-success"
                                            : "text-warning"
                                    }>
                                        {order.status}
                                    </span>
                                </p>

                                <p>
                                    <strong>Total:</strong> ₹
                                    {order.totalAmount.toLocaleString("en-IN")}
                                </p>

                                <hr />

                                <h6>Items</h6>

                                {order.items.map(item => (

                                    <div
                                        key={item.id}
                                        className="d-flex justify-content-between"
                                    >

                                        <span>
                                            Product ID: {item.productId}
                                        </span>
                                        

                                        <span>
                                            Qty: {item.quantity}
                                        </span>

                                        <span>
                                            ₹{item.price}
                                        </span>


                                    </div>

                                ))}

                            </div>

                        </div>

                    ))

                )}

            </div>

            <Footer />
        </>
    );
}

export default MyOrders;