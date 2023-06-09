import Swal from "sweetalert2";
import useCart from "../../../../Firebase/useCart";
import { FaMoneyCheckAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const MyClass = () => {
    const [carts, refetch] = useCart();
    // console.log(carts);
    // const {className,price,_id}=carts;
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })

            }
        })
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold">Total Added Class: {carts.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-sans">
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                carts.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.className}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Link to='payment'>
                                                <button className="btn btn-circle btn-outline">
                                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-circle btn-outline">
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }

                            {/* row 2 */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;