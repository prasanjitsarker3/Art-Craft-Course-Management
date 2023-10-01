import useInstructor from "../../../hooks/useInstructor";
import PopularInsCart from "./PopularInsCart";

const PopularInstructor = () => {
    const [instructor]=useInstructor(); 
    console.log(instructor);
    return (
        <div className="overflow-hidden">
            <div className='py-5 text-center'> 
                <h2 className='text-3xl  text-emerald-400'>Our Instructor</h2>
                <p className="text-lg">An art instructor is responsible for providing instructions on art activities, as well as preparing lectures about the art industry.</p>
            </div>
            {/* data-aos="fade-up" */}
            {/* data-aos-duration="3000" */}
            <div className="grid md:grid-cols-3 gap-5 overflow-hidden">
                {
                    instructor.slice(0,6).map(popular=> <PopularInsCart popular={popular} key={popular._id}>

                    </PopularInsCart>)
                    
                }
            </div>
        </div>
    );
};

export default PopularInstructor;