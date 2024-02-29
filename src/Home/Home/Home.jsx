import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBanner from "../Banner/BistroBanner";
import Category from "../Category/Category";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import PopularMenu from "../PopularMenuSection/PopularMenu";
import RecommendedMenu from "../RecomendedMenu/RecommendedMenu";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Bistro Boss || Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <BistroBanner/>
            <PopularMenu/>
            <PhoneNumber/>
            <RecommendedMenu/>
            <FeaturedMenu/>
            <Testimonial/>
        </div>
    );
};

export default Home;