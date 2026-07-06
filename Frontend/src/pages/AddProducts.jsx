import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Services/productService";

function AddProduct() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        quantity:"",
        category: "",
        imageUrl: "",
        rating: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addProduct(product);
            alert("Product Added Successfully!");
            navigate("/admin/products");
        } catch (error) {
            console.error(error);
            alert("Failed to add product");
        }
    };

    return (
        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="mb-4">Add Product</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        name="name"
                        placeholder="Product Name"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        className="form-control mb-3"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        className="form-control mb-3"
                        placeholder="Quantity"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        name="category"
                        placeholder="Category"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        name="imageUrl"
                        placeholder="/images/product.png"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        step="0.1"
                        name="rating"
                        placeholder="Rating"
                        onChange={handleChange}
                        required
                    />
                    

                    <button
                        className="btn btn-success w-100"
                    >
                        Add Product
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddProduct;