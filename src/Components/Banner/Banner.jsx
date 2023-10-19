
import Navbar from '../Navbar/Navbar';
import './Banner.css'
const Banner = () => {
    return (
        <div className="containerB max-w-[1200px]">
      <div className="overlyB">
        <div className="text-white">
        </div>
        <Navbar></Navbar>
        
        <div>
          <div className="hero min-h-screen text-white">
            <div className="">
           
            
              <div className="w-2/4 px-5">
                <h1 className="text-3xl md:text-6xl text-[#e65252a5] font-bold font-rope pl-5 " data-aos="fade-down" >
                <span className='text-yellow-400' data-aos="fade-down">ELECTRIFY</span> <span className='text-white' data-aos="fade-left">YOUR DAY</span></h1>
                 <h3 className='text-xl px-5 text-gray-300 mt-5 md:text-4xl animate__animated animate__fadeInUp ' data-aos="fade-up">
                  SHop  Electronics  <br />
                  Products With Us
                 </h3>
                 <h1 className='bg-yellow-500 text-center md:mt-10 rounded-lg py-2 text-lg font-semibold' data-aos="fade-down">Shop Now</h1>                        
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;