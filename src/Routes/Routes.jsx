import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/RootFolder/Root";




export const router=createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    children:[

    ]}
])