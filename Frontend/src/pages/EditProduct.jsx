import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../Services/productService";

function EditProduct() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        rating: "",
        imageUrl: "",
        category: ""
    });

    useEffect(() => {
        getProductById(id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateProduct(id, product);
            alert("Product Updated Successfully!");
            navigate("/admin/products");
        } catch (err) {
            console.log(err);
            alert("Update Failed");
        }
    };

    return (

        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2>Edit Product</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        className="form-control mb-3"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />

                    <textarea
                        className="form-control mb-3"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        type="number"
                        step="0.1"
                        name="rating"
                        value={product.rating}
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleChange}
                    />

                    <select
                        className="form-select mb-3"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                    >
                        <option value="Mobiles">Mobiles</option>
                        <option value="Laptops">Laptops</option>
                        <option value="Headphones">Headphones</option>
                        <option value="Accessories">Accessories</option>
                    </select>

                    <button className="btn btn-primary w-100">
                        Update Product
                    </button>

                </form>

            </div>

        </div>
    );
}

export default EditProduct;