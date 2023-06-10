import { useContext } from "react";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider";

const UserHome = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className="text-center text-lg">
            <h1>User Home Dashboard !</h1>
            <h1 className="py-3 font-serif">Name:  {user?.displayName}</h1>
            <h1 className="font-serif">Email: {user?.email}</h1>
        </div>
    );
};

export default UserHome;