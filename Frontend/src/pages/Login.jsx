import { useState } from "react";
import { loginUser } from "../Services/authService";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await loginUser(formData);
            console.log("Login Response:", response)
            console.log("Response Data: ",response.data);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("userId", response.data.userId);
            alert("Login Successful!");

            navigate("/");

        } catch (err) {

            console.error(err);

            setError("Invalid Username or Password");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-4">
                             <h2 className="text-center mb-4"> Login to NovaCart</h2>
                            {error &&
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            }

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label>Username</label>

                                    <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required />

                                </div>

                                <div className="mb-3">

                                    <label>Password</label>

                                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                                </div>        
                                        
                                        
                                 <button className="btn btn-primary w-100"> Login </button>
                                    
                            </form>    
                                    
                            <p className="text-center mt-3"> Don't have an account?

                                <Link to="/register"> {" "}Register </Link>
                             </p>   

                            

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;