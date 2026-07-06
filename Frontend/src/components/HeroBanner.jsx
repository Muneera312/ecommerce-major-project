import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import "./HeroBanner.css";

function HeroBanner(){
    return(
       <section className="hero-banner"  style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay">

                <div className="container">
                    <div className=" hero-content col-lg-6">
                    <h1 className="display-2 fw-bold text-white mx-4">Shop Smarter, <br /> Live Better</h1>
                    <p className="lead text-white my-4">Discover the latest electronics, fashion, laptops and much more at unbeatable prices.</p>
                    
                        <Link to="/products" className="btn btn-primary btn-lg me-3"> Shop Now </Link>
                        <Link to="/products" className="btn btn-outline-light btn-lg "> Explore Products </Link>
                    </div>
                </div>
            </div>
       </section>
    );

}

export default HeroBanner;
