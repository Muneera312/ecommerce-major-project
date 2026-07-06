import { Link } from "react-router-dom";
function Footer (){
    return(
        <footer className=" bg-dark text-light mt-5 pt-5 pb-3 ">
            <div className="container ">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">NovaCart</h2>
                    <p className="text-secondary"> Shop Smart. Save More. Delivered Faster.</p>
                </div>
                <hr className="border-secondary"/>

                <div className="d-flex justify-content-center gap-4 mb-4">
                    <Link className="text-decoration-none text-light" to="/">Home</Link>
                    <Link className="text-decoration-none text-light" to="/products">Products</Link>
                    <Link className="text-decoration-none text-light" to="/contact">Contact</Link>
                    <Link className="text-decoration-none text-light" to="/about">About</Link>
                </div>

                <div className="text-center mb-4">
                    <a href="https://facebook.com" className="text-light me-3 text-decoration-none"><i className="bi bi-facebook fs-4 "> Facebook</i></a>
                    <a href="https://instagram.com" className="text-light me-3 text-decoration-none"> <i className="bi bi-instagram fs-4 "> Instagram</i></a>
                    <a href="https://twitter.com" className="text-light me-3 text-decoration-none"> <i className="bi bi-twitter fs-4 "> Twitter</i></a>
                    <a href="https://linkedin.com" className="text-light me-3 text-decoration-none"><i className="bi bi-linkedin fs-4 "> LinkedIn</i></a>
                </div>
                <hr className="border-secondary"/>

                <div className="text-center">
                    <p className="mb-0 text-secondary"> © 2026 NovaCart. All Rights Reserved.</p>
                </div>


                
            </div>
           
        </footer>
    )
}
export default Footer;