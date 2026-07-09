
import {Link} from "react-router-dom";
import { addToCart } from "../Services/cartService";
function ProductCart({product}){
    
   const handleAddToCart = () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
        alert("Please login first.");
        return;
    }

    addToCart(userId, product.id, 1)
        .then(() => {
            alert("Product added to cart!");
        })
        .catch((error) => {
            console.error(error);
        });
};
    return (
        <div className="card product-card h-100 shadow-sm border-0 rounded-4" style={{width: "18rem"}}>
            <Link to={`/products/${product.id}`} className="text-decoration-none">
              <img src= {`http://localhost:8080${product.imageUrl}`} className="card-img-top" style={{ height: "220px", objectFit: "contain", padding: "15px"}} alt={product.name}/>
            </Link>  
               <div className="card-body d-flex flex-column">
                 <Link to={`/products/${product.id}`} className="text-decoration-none text-dark" >
                    <h5 className="card-title">{product.name}</h5>
                </Link>
                 
                 <p className="card-text">{product.description}</p>
                 <h4>₹{product.price.toLocaleString("en-IN")}</h4>
                 <p>⭐ {product.rating}</p>
                 <div className="d-flex gap-2 mt-auto">
                <button className="btn btn-warning" onClick={handleAddToCart}> Add to Cart </button> 
                <Link to="/cartItem" className="btn btn-primary  ">Buy now</Link>
                </div>
                </div>
        </div>
    );
}
export default ProductCart;