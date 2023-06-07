import useInstructor from "../../../hooks/useInstructor";
import InstractorInfoCart from "../../Shared/InstractorInfoCart";

const Instructor = () => {
    const [instructor] = useInstructor();
    return (
        <div>
            <div className="py-3 text-center">
                <h1 className=" font-serif text-2xl text-emerald-400">Instructor Classes & Information</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    instructor.map(instructor => <InstractorInfoCart
                        key={instructor._id} instructor={instructor}
                    ></InstractorInfoCart>)
                }
            </div>
        </div>
    );
};

export default Instructor;