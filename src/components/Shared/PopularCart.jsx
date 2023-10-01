import { Link } from "react-router-dom";

const PopularCart = ({ popular }) => {
    const { className, image, enroll } = popular;

 
    return (
        <div className="overflow-hidden">
            <Link  className="mx-auto">
                {/* data-aos="zoom-in" to="/instructor" */}
                <div className="card  cursor-pointer shadow-2xl bg-slate-50 p-2 mx-auto">
                    <figure className="px-5 pt-3">
                        <img src={image} alt="Shoes" className=" h-[200px] w-[300px]" />
                    </figure>
                    <h2 className="text-center text-2xl font-semibold py-2">{className}</h2>
                    <div className="flex justify-between px-2 ">
                        <div className="text-lg">
                            <p>Enroll Star: 2023-09-01 </p>
                            <p>Enroll End: 2023-09-15</p>
                        </div>
                        <div>
                            <p className="text-xl font-serif">Enroll : {enroll || 0}</p>
                            <p className="text-xl font-serif">Online</p>
                        </div>
                    </div>
                    <div className="w-full  py-3">
                        <button className="btn btn-primary w-full px-5">course details</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PopularCart;