import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>
            <div className="flex justify-center items-center py-5">
                <img src="https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7903.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=ais" alt="" />

            </div>
            <Link to='/' className="flex justify-center items-center">
                <button className="btn btn-outline btn-success  text-center">Back To Page</button>
            </Link>
        </>
    );
};

export default ErrorPage;