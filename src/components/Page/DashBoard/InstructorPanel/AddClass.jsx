import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthenticationPage/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.displayName, user?.email);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const classData = {enroll:0, name: user?.displayName, email: user?.email, image: data.image, className: data.className, price: data.price, seats: data.seats ,status:"pending"}
        fetch('https://art-server.vercel.app/class', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };
    return (
        <div className="bg-base-200 w-full h-full">
            <div className='bg bg-base-200 h-full'>
                <div className=''>
                    <h1 className='text-center text-lg font-serif py-3 text-green-500'>Add Your Class By Instructor Science</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                            <input placeholder='Seller Name' defaultValue={user?.displayName} {...register("name")} className='h-[50px] px-5 rounded' />
                            <input placeholder="Class Name" required {...register("className", { required: true })} className='h-[50px] px-5 rounded' />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input placeholder='Enter Name' defaultValue={user?.email} {...register("email")} className='h-[50px] px-5 rounded' />
                            <input placeholder='Photo URL...' required {...register("image")} className='h-[50px] px-5 rounded' />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                            <input placeholder='Seats...' {...register("seats")} className='h-[50px] px-5 rounded' />
                            <input placeholder="Price ..." {...register("price", { required: true })} className='h-[50px] px-5 rounded' />

                        </div>
                        {/* errors will return when field validation fails  */} 
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className='py-3 flex justify-center'>
                            <button className="btn btn-wide btn-primary" type='submit'>Add Classes</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddClass;