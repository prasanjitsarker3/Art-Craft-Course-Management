import { FaTrash } from "react-icons/fa";
import useInstructorAddClass from "../../../../hooks/useInstructorAddClass";

const MyAddedClass = () => {
    const [addedClass] = useInstructorAddClass();
    console.log(addedClass);
    return (
        <div>
            <h1 className="text-center text-lg text-green-500 py-5">Instructor All Class{addedClass.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Seats</th>
                                <th>Action</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addedClass.map((user, index) => <tr key={user._id}>

                                    <th>{index + 1}</th>
                                    <th><img src={user.image} alt="" className="w-[50px] h-[50px]" /></th>
                                    <td>{user.className}</td>
                                    <td>{user.price}</td>
                                    <th>{user.seats}</th>
                                    <th>
                                        {
                                            user.status==='pending'? <><button className="btn btn-active btn-primary">Pending</button></>
                                            :<><button className="btn btn-active btn-primary">Approved</button></>
                                        }
                                    </th>
                                    <td>
                                        <button className="btn btn-circle  bg-[#D1A054]">
                                            <FaTrash className="h-6 w-6 flex items-center justify-center"></FaTrash>
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddedClass;