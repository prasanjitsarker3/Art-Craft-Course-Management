import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../components/Page/HomePage/Home";
import Login from "../components/AuthenticationPage/Login";
import Register from "../components/AuthenticationPage/Register";
import Instructor from "../components/Page/Instructor/Instructor";
import PrivateRoute from "./PrivateRoute";
import Classes from "../components/Page/Classes/Classes";

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
                element: <PrivateRoute><Instructor></Instructor></PrivateRoute>
            },
            {
                path: 'classes',
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
            },
            {
                path: "login",
                element: <Login></Login>
            }
            , {
                path: "register",
                element: <Register></Register>
            }
        ]
    }
])
export default router;