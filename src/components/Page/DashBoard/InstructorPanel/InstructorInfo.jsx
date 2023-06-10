import { useContext } from "react";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider";

const InstructorInfo = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex justify-center">
            <div className="text-center w-1/2">
                <div className="text-center text-2xl font-serif">
                    <h1 className="py-3 text-green-500">Instructor About Section</h1>
                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                </div>
            </div>

        </div>
    );
};

export default InstructorInfo;