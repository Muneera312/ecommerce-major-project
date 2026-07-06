import { useState } from "react";
import { registerUser } from "../Services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        role:"User"
    });

    const [error, setError]=useState("");
    const [success, setSuccess]= useState("");

    const handleChange =(e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await registerUser(formData);
            setSuccess("Registration Successfull");
            setError("");
            setTimeout(() => {
                navigate("/login");
            },1500);
        }catch (err){
            setSuccess("");
            setError(
                err.response?.data?.message || "Registration Failed"
            );
        };
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="text-center mb-4"> Create Account </h2>

                            {error &&
                              <div className="alert alert-danger"> {error}</div>
                            }
                            {success&& 
                              <div className="alert alert-success">{success}</div>
                            }
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" 
                                    value={formData.username} onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" name="email" className="form-control" 
                                    value={formData.email} onChange={handleChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control" 
                                    value={formData.password} onChange={handleChange} required/>
                                </div>
                                <button className="btn btn-primary w-100">Register</button>
                            </form>
                            <p className="text-center mt-3">
                                Already have an account?
                                <Link to="/login"> {" "}Login</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Register;