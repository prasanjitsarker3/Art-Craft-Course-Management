import { useContext } from "react";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider";


const AdminHome = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h1 className="text-center text-2xl text-green-500 py-3">Admin Home Section</h1> 
            <div className="flex justify-center items-center">
                <div className="text-center text-2xl font-serif">
                    <img src={user?.photoURL} alt="" className="h-[100px] rounded-md ml-20" />
                    <h1 className="py-3">Name: {user?.displayName}</h1>
                    <p>Email: {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;