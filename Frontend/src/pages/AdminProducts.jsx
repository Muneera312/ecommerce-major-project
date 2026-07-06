import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../Services/productService";

function AdminProducts(){
    const [products, setProducts] = useState([]);
    const loadProducts = ()=>{
        getAllProducts()
           .then(res => setProducts(res.data))
           .catch(err => console.log(err));
    };

    useEffect (()=>{
        loadProducts();
    },[]);
    const handleDelete = async (id) =>{
        if(!window.confirm("Delete this product?")) return;
        try{
            await deleteProduct(id);
            loadProducts();
        }catch(err) {
            console.log(err);
            alert("Unable to delete product");
        }
    };
    return(
        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Manage Products</h2>

                <Link className="btn btn-success" to="/admin/add-product"> + Add Product</Link>
            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id}>

                            <td>
                                <img src={`http://localhost:8080${product.imageUrl}`} width="60" alt={product.name} />
                            </td>

                            <td>{product.name}</td>

                            <td>₹ {product.price}</td>

                            <td>{product.category}</td>

                            <td>

                                <Link className="btn btn-warning btn-sm me-2" to={`/admin/edit-product/${product.id}`} > Edit </Link>

                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)} > Delete </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}
export default AdminProducts;










