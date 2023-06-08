import Banner from "./Banner";
import BannerInfo from "./BannerInfo";
import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <BannerInfo></BannerInfo>
        </div>
    );
};

export default Home;