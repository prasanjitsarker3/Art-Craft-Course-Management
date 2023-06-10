import useClass from "../../../hooks/useClass";
import ClassCart from "../../Shared/ClassCart";


const Classes = () => {
    const [classes] = useClass();
    return (
        <div>
            <div className="py-5 text-center">
                <h1 className=" font-serif text-2xl text-emerald-400">Instructor Classes & Information</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-5 py-5">
                {
                    classes.map(instructor => <ClassCart 
                        key={instructor._id} instructor={instructor} 
                    ></ClassCart>)
                }
            </div>
        </div>
    );
};

export default Classes;