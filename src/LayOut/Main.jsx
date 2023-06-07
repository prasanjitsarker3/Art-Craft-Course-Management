import { Outlet } from "react-router-dom";
import Header from "../components/Section/Header";
import Footer from "../components/Section/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;