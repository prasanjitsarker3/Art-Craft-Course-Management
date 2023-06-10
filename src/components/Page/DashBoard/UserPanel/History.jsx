import usePayment from "../../../../hooks/usePayment";

const History = () => {
    const [payments] = usePayment();
    console.log("Payments All Data", payments);
    return (
        <div>
            <h1 className="text-center text-lg font-serif ">User Payment History !</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-sans">
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>TransactionId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>{item.className}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {new Date(item.date).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {item.transactionId}
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

export default History;