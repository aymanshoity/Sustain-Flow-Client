import { Link } from "react-router-dom";
import SharedHeading from "../SharedComponents/SharedHeading";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
const Login = () => {
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
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span>New to this Website? <Link to='/register' className="text-red-600">Create an Account</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#523906] text-white">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR
                        Login with</div>
                    <div className="flex flex-col py-10 items-center">
                        <button className="btn bg-[#523906] text-white"><FaGoogle />Google </button>
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