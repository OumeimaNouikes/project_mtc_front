import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [user, setuser] = useState([]);
    const [messagee, setMessage] = useState("");
    // useEffect(() => { getAlluser() }, []);
    // const getAlluser = () => {
    //     console.log("here into all user");
    //     let userr = JSON.parse(localStorage.getItem("user") || "[]");
    //     setuser(userr);
    // }
    const handleClick = () => {
        let data = {
            Email: Email,
            Password: Password,
        }
        console.log(data)
        let user = JSON.parse(localStorage.getItem("user") || "[]")
        let message = ""
        for (let i = 0; i < user.length; i++) {
            if (user[i].Email === Email) {
                if (user[i].Password === Password) {
                    message = "2";
                    break;
                } else { message = "1"; break; }
            }
            else {
                message = "0"

            }



        }; console.log(message);
        setMessage(message);
    }
    return (
        <div>
                        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <center><h6>New member ?    <button type="button" onClick={() => navigate("/SignUp")} className="btn btn-primary">SignUp</button></h6></center>
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                            <form className="mx-1 mx-md-4">


                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                    <input type="Email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                    <input type="Password" className="form-control" placeholder="Passwrd" onChange={(e) => setPassword(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>


                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary py-3 px-5" onClick={handleClick} >Sign In</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}