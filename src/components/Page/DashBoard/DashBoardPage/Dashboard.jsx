import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../../hooks/useAdmin";
import useInstructorPanel from "../../../../hooks/useInstructorPanel";
import { FaAddressBook, FaBookOpen, FaEquals, FaHistory, FaHome, FaMoneyCheckAlt, FaPeopleArrows, FaUser } from "react-icons/fa";
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
                        {
                            isAdmin ? <>
                                <li><Link to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to='/dashboard/alluser'><FaUser></FaUser>Manage User</Link></li>
                                <li><Link to='/dashboard/manageClass'><FaBookOpen></FaBookOpen>Manage Class</Link></li>
                                {/* <li><Link to="/dashboard/enroll">My Enrolled Classes</Link></li> */}

                            </> : isInstructor ? <>
                                <li><Link to='/dashboard/instructor'><FaHome></FaHome>Instructor Home</Link></li>
                                <li><Link to='/dashboard/myClasses'><FaBookOpen></FaBookOpen>My Class</Link></li>
                                <li><Link to='/dashboard/addClass'><FaAddressBook></FaAddressBook> Add Class</Link></li>

                            </> : <>
                                <li><Link to='/dashboard/userHome'><FaHome></FaHome>User Home</Link></li>
                                <li><Link to='/dashboard/myClass'><FaBookOpen></FaBookOpen>My Classes</Link></li>
                                <li><Link to="/dashboard/enroll"><FaHistory></FaHistory> My Enrolled Classes</Link></li>
                                <li><Link to="/dashboard/history"><FaMoneyCheckAlt></FaMoneyCheckAlt> Payment History</Link></li>
                            </>


                        }

                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to="/instructor"><FaPeopleArrows></FaPeopleArrows>Instructor</Link></li>
                        <li><Link to='/classes'><FaEquals></FaEquals>Class All</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;