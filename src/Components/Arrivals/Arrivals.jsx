import { Link } from "react-router-dom";

const Arrivals = () => {
  return (
    <div className="my-36">
      <div className="flex gap-2">  <img src="https://i.ibb.co/h1ZJv34/ecom.png" className="w-12" data-aos="fade-up"alt="" />
      <h1 className="text-4xl text-yellow-400 font-bold" data-aos="fade-down" >New Arrivals</h1></div>
      <div className="bg-base-100 shadow-xl my-5 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="card  ">
          <figure className="px-10 box pt-10">
            <img
              src="https://i.ibb.co/XX11LQX/pexels-shedrack-salami-16812192.jpg"
              alt="Shoes"
              className="rounded-xl w-60"
              data-aos="fade-down"
            />
          </figure>
          <div className="card-body items-center text-center" data-aos="fade-up">
            <h2 className="card-title text-black font-bold">Smart Phone
            <div className="badge ml-2 text-white badge-warning p-3">NEW</div>
            </h2>
            <p>Catch the big deals on the device</p>
          
          </div>
        </div>
        <div className="card  ">
          <figure className="px-10 box pt-10">
            <img
              src="https://i.ibb.co/Fg2Pmkg/pexels-assedrani-official-18531513.jpg"
              alt="Shoes"
              className="rounded-xl w-60"
              data-aos="fade-up"
            />
          </figure>
          <div className="card-body items-center text-center" data-aos="fade-down">
            <h2 className="card-title text-black font-bold">Camera
            <div className="badge ml-2 text-white badge-warning p-3">NEW</div>
            </h2>
            <p>Catch the big deals on the device</p>
           
          </div>
        </div>
        <div className="card  ">
          <figure className="px-10 box pt-10">
            <img
              src="https://i.ibb.co/ZfjWQs0/pexels-tahir-osman-18053534.jpg"
              alt="Shoes"
              className="rounded-xl w-60"data-aos="fade-up"
            />
          </figure>
          <div className="card-body items-center text-center" data-aos="fade-down">
            <h2 className="card-title text-black font-bold">Drone
            <div className="badge ml-2 text-white badge-warning p-3">NEW</div>
            </h2>
            <p>Catch the big deals on the device</p>
           
          </div>
        </div>
        <div className="card ">
          <figure className="px-10 box pt-10">
            <img
              src="https://i.ibb.co/cNxfFPs/pexels-wallace-chuck-3587478.jpg"
              alt="Shoes"
              className="rounded-xl box"
              data-aos="fade-down"
            />
          </figure>
          <div className="card-body  items-center text-center" data-aos="fade-up">
            <h2 className="card-title text-black font-bold">Recorder
            <div className="badge ml-2 text-white badge-warning p-3">NEW</div>

            </h2>
            <p>Catch the big deals on the device</p>
            
          </div>
        </div>
      </div>

      <Link to='/allProducts'><button className="btn bg-yellow-400 block mx-auto" data-aos="fade-up" >Show All Products</button></Link>
    </div>
  );
};

export default Arrivals;
