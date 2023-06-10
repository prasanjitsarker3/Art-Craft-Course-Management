import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../../hooks/useAdmin";
import useInstructorPanel from "../../../../hooks/useInstructorPanel";
// import useCart from "../../../../Firebase/useCart";


const Dashboard = () => {
    // const [carts] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorPanel();

    return (
        <div className="">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col pt-10">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-5 mt-3 h-full bg-base-200 uppercase">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><Link to='/dashboard/adminHome'>Admin Home</Link></li>
                                <li><Link to='/dashboard/alluser'>Manage User</Link></li>
                                <li><Link to='/dashboard/manageClass'>Manage Class</Link></li>
                                {/* <li><Link to="/dashboard/enroll">My Enrolled Classes</Link></li> */}

                            </> : isInstructor ? <>
                                <li><Link to='/dashboard/instructor'>Instructor Home</Link></li>
                                <li><Link to='/dashboard/myClasses'>My Class</Link></li>
                                <li><Link to='/dashboard/addClass'>Add Class</Link></li>

                            </> : <>
                                <li><Link to='/dashboard/userHome'>User Home</Link></li>
                                <li><Link to='/dashboard/myClass'>My Classes</Link></li>
                                <li><Link to="/dashboard/enroll">My Enrolled Classes</Link></li>
                                <li><Link to="/dashboard/history">Payment History</Link></li>
                            </>


                        }

                        <div className="divider"></div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/instructor">Instructor</Link></li>
                        <li><Link to='/classes'>Class All</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;