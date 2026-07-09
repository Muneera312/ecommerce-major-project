import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCart from "./productCart";
import { getAllProducts } from "../Services/productService";

function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((response) => {
                setProducts(response.data); 
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const filteredProducts =
        selectedCategory === ""
            ? products.slice(0, 4)
            : products
                  .filter(
                      (product) => product.category === selectedCategory
                  )
                  .slice(0, 4);

    return (
        <section className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Featured Products</h2>

                <Link to="/products" className="btn btn-outline-primary">
                    View All
                </Link>
            </div>

            <div className="row">
                {filteredProducts.map((product) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
                        <ProductCart product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;