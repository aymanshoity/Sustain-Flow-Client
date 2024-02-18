import { Link, useNavigate } from "react-router-dom";
import SharedHeading from "../SharedComponents/SharedHeading";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
const Register = () => {
    const { user, createUser, logOut } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate=useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result)
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photoURL
                })
                    .then(() => {
                        Swal.fire("User Created Successfully!");
                        reset()
                        logOut()
                            .then()
                            .catch(error => console.log(error))
                        navigate('/')    
                    })
                    .catch(error => {
                        console.error(error.message)
                    })

            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="py-20  bg-slate-200  mx-auto ">
            <SharedHeading heading={'Register Now!!'} />
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-around  mx-auto ">
                <motion.div
                    className="card md:w-full max-w-2xl shadow-2xl bg-base-100"
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
                        <p>Create an account to explore the insights</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input {...register('name', { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: true })} type="text" placeholder="photo url" className="input input-bordered" required />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, maxLength: 16, minLength: 6, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password length should be at least 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password length should be maximum 16 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password length should contain 1 number,1 special character,1 uppercase and 1 lowercase</p>
                                )}

                            </div>
                        </div>
                        <label className="label">
                            <span>Already Registered? Go to  <Link to='/login' className="text-red-600">Login Page</Link></span>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#523906] text-white">Register</button>
                        </div>

                    </form>
                    <div className="divider">OR
                        Sign up with</div>
                    <div className="flex flex-col py-10 items-center">
                        <button className="btn bg-[#523906] text-white"><FaGoogle />Google </button>
                    </div>

                </motion.div>


                {/* <div className="card md:w-full max-w-2xl shadow-2xl bg-base-100">
                    <div className="py-10 flex flex-col items-center">
                        <img className="w-[100px] h-[100px] rounded-full  " src="../../../public/R.jpeg" alt="" />
                        <h1>Welcome to <span className="text-[#62760C]">Sustain Flow</span>!!!</h1>
                        <p>Create an account to explore the insights</p>
                    </div>
                    <form className="card-body">
                        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
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

                            </div>
                        </div>
                        <label className="label">
                            <span>Already Registered? Go to  <Link to='/login' className="text-red-600">Login Page</Link></span>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#523906] text-white">Register</button>
                        </div>

                    </form>
                    <div className="divider">OR
                        Sign up with</div>
                    <div className="flex flex-col py-10 items-center">
                        <button className="btn bg-[#523906] text-white"><FaGoogle />Google </button>
                    </div>
                </div> */}
            </div>
            <div className="flex justify-center items-center py-10">
                <Link className="btn bg-[#523906] text-white" to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Register;