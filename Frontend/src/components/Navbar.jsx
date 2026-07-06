import { Link, useNavigate , useLocation} from "react-router-dom";
function Navbar({search, setSearch}){
    const navigate = useNavigate();
    const location= useLocation();

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    const logout=()=>{
        localStorage.clear(); navigate("/login")
         window.location.reload();
    }

    return(
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
                  NovaCart
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target = "#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end align-items-end collapse navbar-collapse" id="navbarNav">
                    <form className="d-flex me-3 w-50">
                        <input className="form-control" type="search" placeholder="Search products..." value={search} onChange={(e)=> {setSearch(e.target.value);
                             if (location.pathname!=="/products") {
                                navigate("/products");
                             }
                        }}
                        
                            />
                    </form>
                    <Link className=" btn btn-outline-secondary me-2" to="/cart"><i className="bi bi-cart3 me-2"></i> </Link>
                    
                    {token &&(
                        <Link className="btn btn-outline-secondary me-2" to="/orders">Orders</Link>
                    )}

                    {!token ? (
                        <>
                            <Link className="btn btn-outline-secondary me-2" to="/login">Login</Link>
                     <Link className="btn btn-outline-secondary me-2" to="/register">Register</Link>
                        </>
                    ):(
                        <>
                           <span className="me-3 fw-semibold text-primary"> 👋 Hi, {username}</span>
                           {role === "ADMIN" && (
                                <Link className="btn btn-warning me-2" to="/admin"> Admin Dashboard </Link>
                            )}
                           <button className="btn btn-danger" onClick={logout}> Logout </button>
                        </>
                    )}



                   
                </div>
            </div>
       
        </nav>
    );
}
export default Navbar;