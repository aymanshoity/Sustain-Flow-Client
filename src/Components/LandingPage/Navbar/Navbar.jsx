import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authntication/Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: `${user.displayName} Logged Out`,
                    timer: 1500
                })
            })
            .catch()
    }

    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-[#CDB30C] text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>Home</NavLink>
        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'text-[#CDB30C] text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>Dashboard</NavLink>
        {
            user ?
                <><NavLink onClick={handleLogOut} className={({ isActive }) => (isActive ? 'text-[#CDB30C] text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>Logout</NavLink>

                </> :
                <>
                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-[#CDB30C] text-xl font-semibold mr-4' : 'text-white text-xl font-semibold mr-4')}>Login</NavLink></>
        }
    </>
    return (
        <div className=" p-10 lg:w-[1280px] lg:mx-auto mx-10">
            <div className="navbar bg-[#523906] rounded-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-[#CDB30C]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[50px] h-[50px] rounded-full mr-4" src="../../../../public/SustainFlow Logo.jpeg" alt="" />
                        <h1 className="text-white text-2xl font-bold"><span className="text-3xl">S</span>ustain <span className="text-3xl">F</span>low</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/register' className="btn rounded-full bg-white text-xl font-bold  text-[#523906]">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;