import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/RootFolder/Root";
import Home from "../Components/LandingPage/Home/Home";
import Register from "../Components/Authntication/Register";
import Login from "../Components/Authntication/Login";




export const router=createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/register',element:<Register></Register>},
        {path:'/login',element:<Login></Login>},
    ]}
])