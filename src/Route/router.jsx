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
import AddClass from "../components/Page/DashBoard/InstructorPanel/AddClass";
import MyAddedClass from "../components/Page/DashBoard/InstructorPanel/MyAddedClass";
import InstructorInfo from "../components/Page/DashBoard/InstructorPanel/InstructorInfo";
import Payment from "../components/Page/DashBoard/UserPanel/Payment";
import UserHome from "../components/Page/DashBoard/UserPanel/UserHome";
import History from "../components/Page/DashBoard/UserPanel/History";
import EnrollClass from "../components/Page/DashBoard/UserPanel/EnrollClass";

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
            , {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "myClass",
                element: <MyClass></MyClass>
            },
            {
                path: "alluser",
                element: <AllUser></AllUser>
            },
            {
                path: "manageClass",
                element: <ManageClass></ManageClass>
            },
            {
                path: "addClass",
                element: <AddClass></AddClass>
            },
            {
                path: "myClasses",
                element: <MyAddedClass></MyAddedClass>
            },
            {
                path: "instructor",
                element: <InstructorInfo></InstructorInfo>
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "history",
                element: <History></History>
            }
            ,
            {
                path: "enroll",
                element: <EnrollClass></EnrollClass>
            }
            ,
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/carts/${params.id}`)
            }
        ]
    }
])
export default router;