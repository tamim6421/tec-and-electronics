import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className="my-36 flex items-center bg-gray-100 py-10"> 
        <Marquee pauseOnHover={true} speed={100}>
        <button className="text-4xl text-gray-400 btn bg-yellow-300">SHOP</button>
            <h3 className="text-4xl ml-16 text-gray-400">    AND <span className="text-5xl font-semibold text-yellow-400"> SAVE BIG</span> ON HOTTEST PRODUCT AND ENJOY  </h3>
        <button className="text-4xl text-gray-400 btn bg-yellow-300">SHOP</button>
            <h3 className="text-4xl ml-16 text-gray-400">    AND <span className="text-5xl font-semibold text-yellow-400"> SAVE BIG</span> ON HOTTEST PRODUCT AND ENJOY  </h3>
        </Marquee>

        </div>
    );
};

export default Slider;