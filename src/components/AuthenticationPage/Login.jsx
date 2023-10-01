import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocailLogin from "./SocailLogin";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const from = location?.state?.from?.pathname || "/";
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        userLogin(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("User Login Successfully !")
                navigate(from, { replace: true })
            })
            .catch(error => { 
                setSuccess('')
                setError(error.message);
            })
    };

    return (
        <div className="py-2">
            <div className=" bg-base-200"> 
                <div className="col md:flex justify-center items-center gap-5 p-5">
                    <div className="text-center md:w-1/2">
                        <img className="h-[400px]" src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=country_rows_v1" alt="" />
                    </div>
                    <div className="card flex-shrink-0  md:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />
                                {errors.email && <span className=" text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    pattern: /(?=.*[0-9].*[0-9])/,
                                    required: true, minLength: 6, maxLength: 20
                                })} placeholder="Enter Password" className="input input-bordered" />
                                {errors.password && <span className=" text-red-500">Password Length 6 to 20 & One Uppercase</span>}
                                {errors.password?.type === 'pattern' && <span className=" text-red-500">Ensure string has two digits</span>}
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>New here?<Link to='/register' className=' text-blue-500 underline text-center'>Create a New Account</Link></p>
                            <p className="text-center text-green-800">{success}</p>
                            <p className="text-center text-red-700">{error}</p>

                        </form>
                        <div className=" divider">OR</div>
                        <SocailLogin></SocailLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;