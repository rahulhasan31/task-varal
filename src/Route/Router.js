import Main from "../Layout/Main";
import Home from "../page/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
       path:'/',
       element:<Main/>,
       children:[
        {
            path:"/",
            element:<Home/>
        }
       ]
    }
])