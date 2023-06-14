import { Link } from "react-router-dom";

const PopularInsCart = ({ popular }) => {
    const {name,image}=popular;
    return (
        <Link to="/instructor" className="mx-auto">
            <div className="card w-96  cursor-pointer">
                <figure className="px-7 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
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