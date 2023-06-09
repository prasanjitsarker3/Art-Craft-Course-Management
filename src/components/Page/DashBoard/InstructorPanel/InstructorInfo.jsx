import { useContext } from "react";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider";

const InstructorInfo = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-center">
            <div className="text-center w-1/2">
                <img src={user?.photoURL} alt="" className="text-center rounded-full w-[200px] h-[200px]" />
                <div className="text-center">
                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default InstructorInfo;