import { Link } from "react-router-dom";

const PopularInsCart = ({ popular }) => {
    const { name, image } = popular;
    return (
        <Link to="/instructor" className="mx-auto">
            <div className="cards    cursor-pointer relative transition duration-200 transform hover:-translate-y-2">
                <figure className="px-7 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-bodys h-full w-full top-0 py-2">
                    <h2 className="card-titles uppercase font-bold  text-teal-500 text-center! mt-4">{name}</h2>
                    <p className="card-infos text-xl font-light py-5 text-white">{popular.email}</p>
                    <button className='card-btns p-3 rounded-md capitalize border-none outline-none cursor-pointer font-semibold leading-5'> Instructor Details</button>
                </div>
            </div>
        </Link>
    );
};

export default PopularInsCart;