import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocailLogin = () => {
    const { googleSignUp } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const handleGooGleSign = () => {
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="text-center">
            <button onClick={handleGooGleSign} className="btn btn-circle btn-outline ">G</button>
        </div>
    );
};

export default SocailLogin;