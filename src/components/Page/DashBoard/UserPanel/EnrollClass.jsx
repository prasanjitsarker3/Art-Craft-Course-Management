import usePayment from "../../../../hooks/usePayment";

const EnrollClass = () => {
    const [payments] = usePayment();
    return (
        <div>
            <h1 className="text-lg text-center text-green-500 font-serif font-bold">Enrollment Classes All:{payments.length}</h1>
            <div className="overflow-x-auto p-12">
                <table className="table table-zebra">
                    {/* head */}
                    <thead> 
                        <tr className="text-lg font-sans">
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Demo</th>
                            <th>Continue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td className="text-2xl text-blue-600 font-serif">{item.className}</td>
                                    <td><button className="btn btn-active btn-primary">Demo</button></td>
                                    <td><button className="btn btn-active btn-primary">Continue</button></td>
                                    
                                </tr>
                            )
                        }

                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;