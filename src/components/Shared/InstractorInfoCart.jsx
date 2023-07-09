
const InstractorInfoCart = ({ instructor }) => {
    const { name, image, email, className } = instructor;
    return (
        <div className="card card-side shadow-xl p-3 grid grid-cols-2">
            <figure><img src={image} className="h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">Name: {name}</h2> 
                {/* <p className="text-lg ">Classes: {className}</p> */}
                <p className="text-lg">Email:{email}</p> 
                <p>The purpose of an art and craft course is to foster creativity, develop artistic skills, and expand knowledge and understanding ... </p>
            </div>
        </div>
    );
};

export default InstractorInfoCart;