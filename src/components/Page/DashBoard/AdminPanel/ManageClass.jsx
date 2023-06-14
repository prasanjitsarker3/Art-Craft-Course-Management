import useAdminMangeClass from "../../../../hooks/useAdminMangeClass";
import useClass from "../../../../hooks/useClass";


const ManageClass = () => {
    const [classes] = useClass();
    const [manegeClass, refetch] = useAdminMangeClass();
    console.log(manegeClass);
    console.log(classes);

    const handleUpdateMangeClass = (user) => {
        fetch(`http://localhost:5000/class/pending/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })


    }
    const handleUpdateDenyClass = (user) => {
        fetch(`http://localhost:5000/class/approved/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }
    return (
        <div>
            <div className="text-center text-2xl text-green-500">
                <h1>All Classes In This Course: {manegeClass.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto px-2">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className=" ">
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Seats</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Deny </th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manegeClass.map((user, index) => <tr key={user._id}>

                                    <th>{index + 1}</th>
                                    <th> <img src={user.image} alt="" className="w-[50px] h-[50px]" /></th>
                                    <td>{user.name}</td>
                                    <td>{user.className}</td>
                                    <td>{user.email}</td>
                                    <td>{user.price}</td>
                                    <td>{user.seats}</td>
                                    <td>{user.status}</td>

                                    <td>
                                        
                                             <button disabled={`${user.status==='approved' || user.status==='deny'?true:''}`} onClick={() => handleUpdateMangeClass(user)} className="btn btn-outline btn-success">Approved</button>
                                            
                                        
                                    </td>
                                    
                                    <td>
                                        
                                             <button disabled={`${user.status==='approved' || user.status==='deny'?true:''}`} onClick={() => handleUpdateDenyClass(user)} className="btn btn-outline btn-success">Deny</button>
                                            
                                        
                                    </td>
                                
                                    <td>
                                        <button className="btn btn-outline btn-success">
                                            FeedBack
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

export default ManageClass;