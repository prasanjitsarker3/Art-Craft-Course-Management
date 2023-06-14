import { useContext } from "react";
import { AuthContext } from "../AuthenticationPage/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useInstructorPanel from "../../hooks/useInstructorPanel";

const ClassCart = ({ instructor }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructorPanel(); 
    console.log(isAdmin);
    console.log(isInstructor);
    const { name, image, className, price, seats, _id,enroll } = instructor;
    const handleAddToCart = (instructor) => {
        if (user && user.email) {
            const cartClass = {enroll:enroll, classId: _id, name, image, className, price, seats, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login & Add Class?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    } 
    return (
        <div className="mx-auto">
            
            <div className={`card w-96  shadow-xl ${seats===0?'bg-red-400':''}`}>
                <figure className="px-7 pt-6">
                    <img src={image} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-2xl font-semibold text-center">Course:{className}</h2>
                    <p className="text-lg text-center">Instructor Name: {name}</p>
                    <div className="flex justify-between items-center text-lg gap-5">
                        <p className="pl-12">Price: {price}</p>
                        <p>Seats: {seats}</p>
                    </div>

                    {/* <div className="card-actions">
                        <button onClick={() => handleAddToCart(instructor)} className="btn btn-primary w-full mx-auto">Select</button>
                    </div> */}

                    {
                        isAdmin || isInstructor ? <button disabled className="btn btn-outline btn-info disabled ">Select</button> : <div className="card-actions">
                            <button onClick={() => handleAddToCart(instructor)} className="btn btn-primary w-full mx-auto">Select</button>
                        </div>
                    }
                </div>
            </div>



        </div>
    );
};

export default ClassCart;