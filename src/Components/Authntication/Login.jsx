import { Link, useNavigate } from "react-router-dom";
import SharedHeading from "../SharedComponents/SharedHeading";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const navigate=useNavigate()
    const [errorMessage,setErrorMessage]=useState('')
    const {userSignIn ,googleSignIn} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const loggedUser = { email, password }
        console.log(loggedUser)
        userSignIn(email, password)
            .then(result=>{
                console.log(result.user)
                setErrorMessage('')
                Swal.fire(`${result.user.displayName} Logged In Successfully`);
                navigate('/')
                
            })
            .catch(error=>{
                console.log(error.code)
                if (error.code === 'auth/invalid-credential') {
                    return setErrorMessage('Invalid Email/Password..Please Provide the Correct One')
                }
            })

    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            Swal.fire(`${result.user.displayName} Logged In Successfully`);
            navigate('/');
        })
    }
    return (
        <div className="py-20  bg-slate-200 mx-auto ">
            <SharedHeading heading={'Login Now!!'} />
            <div className="flex flex-col lg:flex-row items-center justify-around  mx-auto ">
                <motion.div
                    className="card  shrink-0  lg:min-w-2xl max-w-2xl shadow-2xl bg-base-100"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <div className="py-10 flex flex-col items-center">
                        <img className="w-[100px] h-[100px] rounded-full  " src="../../../public/R.jpeg" alt="" />
                        <h1>Welcome to <span className="text-[#62760C]">Sustain Flow</span>!!!</h1>
                        <p>Please login to observe the insights</p>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <label className="label">
                            {
                                errorMessage && <p className="text-red-600">{errorMessage}</p>
                            }
                        </label>
                        <label className="label">
                            <span>New to this Website? <Link to='/register' className="text-red-600">Create an Account</Link></span>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#523906] text-white">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR
                        Login with</div>
                    <div className="flex flex-col py-10 items-center">
                        <button onClick={handleGoogleSignIn} className="btn bg-[#523906] text-white"><FaGoogle />Google </button>
                    </div>

                </motion.div>



            </div>
            <div className="flex justify-center items-center py-10">
                <Link className="btn bg-[#523906] text-white" to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Login;