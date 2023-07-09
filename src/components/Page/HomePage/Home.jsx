import Banner from "./Banner";
import BannerInfo from "./BannerInfo";
import Contract from "./Contract";
import Course from "./Course";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import SiteInformation from "./SiteInformation";
import Test from "./Test";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Course></Course>
            <BannerInfo></BannerInfo>
            <SiteInformation></SiteInformation>
             <Test></Test>
            <Contract></Contract>
        </div>
    );
};

export default Home;