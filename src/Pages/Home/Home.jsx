import Arrivals from "../../Components/Arrivals/Arrivals";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Services from "../../Components/Services/Services";
import Slider from "../../Components/Slider/Slider";
import Standard from "../../Components/Standard/Standard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Brand></Brand>
            <Standard></Standard>
            <Arrivals></Arrivals>
            <Services></Services>
        </div>
    );
};

export default Home;