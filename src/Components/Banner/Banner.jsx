
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
                 BIYESADI EVENT MANAGEMENT</h1>
                 <h3 className='text-2xl px-5 text-[#ea8773f2] mt-5 md:text-4xl animate__animated animate__fadeInUp '>
                  Moment <br />
                  You do not Forget
                 </h3>                        
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;