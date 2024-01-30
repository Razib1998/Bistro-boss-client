import Banner from "../Banner/Banner";
import BistroBanner from "../Banner/BistroBanner";
import Category from "../Category/Category";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import PopularMenu from "../PopularMenuSection/PopularMenu";
import RecommendedMenu from "../RecomendedMenu/RecommendedMenu";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBanner/>
            <PopularMenu/>
            <PhoneNumber/>
            <RecommendedMenu/>
            <FeaturedMenu/>
        </div>
    );
};

export default Home;