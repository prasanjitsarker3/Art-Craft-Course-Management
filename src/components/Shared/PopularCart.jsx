import { Link } from "react-router-dom";

const PopularCart = ({ popular }) => {
    const { className, image,enroll} = popular;
    return ( 
        <div>  
            <Link to="/instructor" className="mx-auto">
                <div className="card w-96  cursor-pointer mx-auto">
                    <figure className="px-7 pt-5">
                        <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{className}</h2>
                        <p className="text-lg font-serif">Enroll : {enroll || 0}</p>
                        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PopularCart;