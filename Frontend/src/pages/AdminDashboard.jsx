import { Link } from "react-router-dom";

function AdminDashoboard(){
    return(
        <div className="container mt-5">
            <h2 className="text-center mb-5">
               👑 Admin Dashboard
            </h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card shadow text-center p-4">
                        <h4>📦 Products</h4>
                        <p>Manage All Products</p>
                        <Link className="btn btn-primary" to="/admin/products">Manage Products</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow text-center p-4">
                        <h4>➕ Add Product</h4>
                        <p>Add new Products</p>
                        <Link className="btn btn-success" to="/admin/add-product">Add Product</Link>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow text-center p-4">
                        <h4>📋 Orders</h4>
                        <p>View customer orders</p>
                        <Link className="btn btn-warning" to="/admin/orders">View orders</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashoboard;