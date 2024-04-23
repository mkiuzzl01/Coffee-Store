import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Add_Coffee from "../Pages/Add_Coffee";
import Update_Coffee from "../Pages/Update_Coffee";
import LogIn from "../Pages/LogIn";
import Registration from "../Pages/Registration";
import Users from "../Pages/Users";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                loader:()=> fetch('http://localhost:5000/coffee'),
                element:<Home></Home>
            },
            {
                path:'/Add_Coffee',
                element:<Add_Coffee></Add_Coffee>
            },
            {
                path:'/Update/:id',
                loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`),
                element:<Update_Coffee></Update_Coffee>
            },
            {
                path:'/LogIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/Registration',
                element:<Registration></Registration>
            },
            {
                path:'/Users',
                loader:()=> fetch('http://localhost:5000/users'),
                element:<Users></Users>
            }
        ]
    }
])

export default route;