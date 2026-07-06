import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCart, removeCartItem, updateQuantity} from "../Services/cartService";

function Cart() {

    const [cart, setCart] = useState(null);

    useEffect(() => {
        loadCart();
    }, []);
    const userId = localStorage.getItem("userId");
    const loadCart = () => {
        getCart(userId)
            .then((response) => {
                setCart(response.data);
            })
            .catch(console.error);
    };

    const handleQuantity = (itemId, quantity) => {
                 if (quantity < 1) return;
                  updateQuantity(itemId, quantity)
                         .then(() => {
                             loadCart();
                       })
                       .catch(console.error);
    };

    const handleRemove = (itemId) => {
        removeCartItem(itemId)
            .then(() => {
                loadCart();
            })
            .catch(console.error);
    };

    if (!cart) {
        return (
            <div className="container text-center mt-5">
                <h2>Loading Cart...</h2>
            </div>
        );
    }

    const grandTotal = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity,0);

    return (
        <>
            

            <div className="container my-5">

                <h2 className="mb-4">🛒 Shopping Cart</h2>

                {cart.items.length === 0 ? (
                    <h4>Your cart is empty. <br /> <Link to="/products" className="btn btn-primary my-2">Shop Now</Link></h4>
                    
                ) : (
                    <>
                        {cart.items.map((item) => (
                            <div key={item.id} className="card shadow-sm mb-3 p-3">
                                 <div className="row align-items-center">

                                    <div className="col-md-3 text-center">
                                       <img src={`http://localhost:8080${item.product.imageUrl}`} alt={item.product.name} className="img-fluid" style={{ maxHeight: "180px", objectFit: "contain" }}/>
                                    </div>
                                     <div className="col-md-5">
                                         <h4>{item.product.name}</h4>
                                         <h5 className="text-primary"> ₹ {item.product.price.toLocaleString("en-IN")}</h5>
                                          <p className="text-muted">{item.product.description} </p>

                                        <div className="d-flex align-items-center mt-3">
                                           <button className="btn btn-outline-secondary" onClick={() =>handleQuantity(item.id, item.quantity - 1) } > -</button>
                                           <span className="mx-3 fw-bold"> {item.quantity}</span>
                                           <button className="btn btn-outline-secondary" onClick={() => handleQuantity(item.id, item.quantity + 1) }> + </button>
                                        </div>
                                    </div>

                                     <div className="col-md-4 text-end">
                                         <h5> ₹ {(item.product.price * item.quantity).toLocaleString("en-IN")} </h5>
                                         <button className="btn btn-danger mt-3" onClick={() => handleRemove(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="card shadow p-4 mt-4 ms-auto" style={{ maxWidth: "350px" }}>
                             <h4 className="mb-3">Order Summary</h4>
                            <div className="d-flex justify-content-between">
                                 <span>Subtotal</span>
                                <span>₹ {grandTotal.toLocaleString("en-IN")}</span>
                            </div>

                             <div className="d-flex justify-content-between">
                               <span>Delivery</span>
                               <span className="text-success">FREE</span>
                            </div>

                             <hr />

                            <div className="d-flex justify-content-between fw-bold">
                                <span>Total</span>
                                <span>₹ {grandTotal.toLocaleString("en-IN")}</span>
                            </div>

                           <Link to="/checkout" state={{ cart, grandTotal }}className="btn btn-success w-100 mt-3"> Proceed to Checkout </Link>

                        </div>
                    </>
                )}

            </div>

            <Footer />
        </>
    );
}

export default Cart;