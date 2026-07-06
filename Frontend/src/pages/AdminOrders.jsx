import { useEffect, useState } from "react";
import { getAllOrders } from "../Services/orderService";

function AdminOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders()
            .then(res => setOrders(res.data))
            .catch(console.error);
    }, []);

    return (
        <div className="container mt-5">

            <h2>All Orders</h2>

            <table className="table table-bordered mt-4">

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>

                    {orders.map(order => (

                        <tr key={order.id}>

                            <td>{order.id}</td>
                            <td>{order.userId}</td>
                            <td>₹{order.totalAmount}</td>
                            <td>{order.status}</td>
                            <td>{new Date(order.orderDate).toLocaleString()}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default AdminOrders;