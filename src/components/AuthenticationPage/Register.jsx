import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocailLogin from "./SocailLogin";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider"; 
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/"; 
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { password, confirmPassword } = data;
        if (password === confirmPassword) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, data.photoURL)
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email, image:data.photoURL }
                            fetch('https://art-server.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/');
                                        setSuccess("User Login Successfully !")
                                        // navigate(from, { replace: true })
                                    }
                                })

                        })
                })
                .catch(error => {
                    setSuccess('')
                    setError(error.message);
                })

        } 




    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="">
            <div className=" bg-base-200">
                <div className="col md:flex justify-center items-center gap-5 p-5">
                    <div className="text-center md:w-1/2">
                        <img className="h-[400px]" src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?size=626&ext=jpg&ga=GA1.1.2060036261.1681297115&semt=country_rows_v1" alt="" />
                    </div>
                    <div className="card flex-shrink-0  md:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Type Name" className="input input-bordered" />
                                {errors.name && <span className=" text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className=" text-red-500">Photo is required</span>}
                            </div>
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
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" {...register("password", {
                                    pattern: /(?=.*[0-9].*[0-9])/,
                                    required: true, minLength: 6, maxLength: 20
                                })} placeholder="Enter Password" className="input input-bordered" />
                                <p className=" rounded-lg p-1 cursor-pointer" onClick={handleTogglePasswordVisibility}>
                                    {showPassword ? 'Show' : 'Hide'}

                                </p>
                                {errors.password && <span className=" text-red-500">Password Length 6 to  </span>}
                                {errors.password?.type === 'pattern' && <span className=" text-red-500">Ensure string has two digits</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} id="confirmPassword"  {...register("confirmPassword", {
                                    pattern: /(?=.*[0-9].*[0-9])/,
                                    required: true, minLength: 6, maxLength: 20,
                                    validate: (value) => value === watch('password') || 'Passwords do not match.',
                                })} placeholder="Enter Password" className="input input-bordered" />

                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                                {errors.password?.type === 'pattern' && <span className=" text-red-500">Ensure string has two digits</span>}
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center'>Already registered?<Link to="/login" className=' text-blue-500 underline text-center'> Go to log in</Link></p>
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

export default Register;