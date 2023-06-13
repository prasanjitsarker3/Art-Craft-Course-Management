
const InstractorInfoCart = ({ instructor }) => {
    const { name, image, email, className } = instructor;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-3">
            <figure><img src={image} className="h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">Name: {name}</h2>
                {/* <p className="text-lg ">Classes: {className}</p> */}
                <p>Email:{email}</p>
            </div>
        </div>
    );
};

export default InstractorInfoCart;