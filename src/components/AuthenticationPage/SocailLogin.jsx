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
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://art-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    }, 
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                // navigate(from, { replace: true })
            })

    }
    return (
        <div className="text-center">
            <button onClick={handleGooGleSign} className="btn btn-circle btn-outline ">G</button>
        </div>
    );
};

export default SocailLogin;