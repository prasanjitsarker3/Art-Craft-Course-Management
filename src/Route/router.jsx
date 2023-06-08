import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../components/Page/HomePage/Home";
import Login from "../components/AuthenticationPage/Login";
import Register from "../components/AuthenticationPage/Register";
import Instructor from "../components/Page/Instructor/Instructor";
import Classes from "../components/Page/Classes/Classes";
import Dashboard from "../components/Page/DashBoard/DashBoardPage/Dashboard";
import MyClass from "../components/Page/DashBoard/DashBoardPage/MyClass";
import AllUser from "../components/Page/DashBoard/DashBoardPage/AllUser";
import ManageClass from "../components/Page/DashBoard/AdminPanel/ManageClass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'instructor',
                element: <Instructor></Instructor>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <Login></Login>
            }
            , {
                path: "register",
                element: <Register></Register>
            }
            ,{
                path:"dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"myClass",
                element:<MyClass></MyClass>
            },
            {
                path:"alluser",
                element:<AllUser></AllUser>
            },
            {
                path:"manageClass",
                element:<ManageClass></ManageClass>
            }
        ]
    }
])
export default router;