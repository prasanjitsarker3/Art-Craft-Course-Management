import { Link } from "react-router-dom";

const PopularInsCart = ({ popular }) => {
    const { name, image } = popular;
    return (
        <Link  to="/instructor" className="mx-auto">
            <div  className="card w-96  cursor-pointer relative transition duration-200 transform hover:-translate-y-2">
                <figure className="px-7 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center bg bg-black bg-opacity-75  opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col transition-opacity rounded-lg">
                    <h2 className="card-title mt-4">{name}</h2>
                    <p className="text-lg">{popular.email}</p>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default PopularInsCart;