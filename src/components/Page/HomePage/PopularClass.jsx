import { Fade } from "react-awesome-reveal";
import useClass from "../../../hooks/useClass";
import PopularCart from "../../Shared/PopularCart";

const PopularClass = () => {
    const [classes] = useClass();
   
    return (
        <Fade direction="left overflow-hidden">
            <div className='py-5 text-center overflow-hidden'>
                <h2 className='text-3xl  text-emerald-400'>Our Popular Classes</h2>
                <p className="text-lg">An art instructor is responsible for providing instructions on art activities, as well as preparing lectures about the art industry.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-7 lg:px-0 md:px-0 px-5">
                {
                    classes.slice(0, 6).map(popular => <PopularCart popular={popular} key={popular._id} ></PopularCart>)
                }
            </div>

        </Fade>
    );
};

export default PopularClass;