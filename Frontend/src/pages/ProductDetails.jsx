import { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProductById } from "../Services/productService";
import Footer from "../components/Footer";
import { addToCart } from "../Services/cartService";

function ProductDetails(){
    const { id } = useParams();
    const [product, setProduct]=useState(null);
    const [quantity, setQuantity] = useState(1);
    const handleAddToCart = ()=>{
        addTOCart(1,product.id,quantity)
          .then(()=>{
            alert("Product added to cart!")
          })
          .catch((error)=>{
            console.error(error);
          })
    }

    useEffect(()=> {
        getProductById(id)
          .then((response)=>{
            setProduct(response.data);
          })
          .catch((error)=>{
            console.error(error);
          })
    }, [id]);

    if(!product){
        return(
            <div className="container text-center mt-5">
                <h1>Loading....</h1>
            </div>
        );
    }
    return(
        <>
       
        <div className="container py-5">

            <div className="row ">
                <div className="col-md-4">
                    <img src= {`http://localhost:8080${product.imageUrl}`} className="img-fluid rounded shadow" alt={product.name} />
                </div>
                <div className="col-md-7 my-4 mx-4">
                    <h2>{product.name}</h2>
                    <h3 className=" my-3">₹ {product.price}</h3>
                    <p className="text-success fw-semibold">
                         ✔ In Stock
                    </p>
                    
                    <p>{product.description}</p>
                    <div className="mb-3">
                        ⭐⭐⭐⭐⭐
                        <span className="ms-2 text-muted">
                            ({product.rating})
                          </span>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <button className="btn btn-outline-secondary" onClick={()=> quantity>1 && setQuantity(quantity-1)}> - </button>
                        <span className="mx-3 fw-bold"> {quantity}</span>
                        <button className="btn btn-outline-secondary" onClick={()=> setQuantity(quantity+1)}> + </button>
                    </div>
                    <div className="d-flex gap-3">
                    <button className="btn btn-warning" onClick={handleAddToCart}>Add to Cart</button>
                    <Link to="/cart" className="btn btn-primary">Buy Now</Link>
                    </div>
                    <div className="mt-4 fw-bold">
                       <p>🚚 Free Delivery</p>
                       <p>🔄 7 Days Easy Return</p>
                       <p>🔒 Secure Payment</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ProductDetails;












