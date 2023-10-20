const Standard = () => {
  return (
    
    <div>
      <div className="hero min-h-[50vh] my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/xmPJMpn/pexels-ola-dapo-3345882.jpg"
            className=" box max-w-xs  rounded-lg shadow-2xl"
            data-aos="zoom-in-up"

          />
          <div>
          <div data-aos="fade-down" className="relative flex flex-col mt-6  bg-white shadow-md  rounded-xl bg-clip-border ">
  <div className="p-6 box" >
    
    <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 p-2">
     Receive <span className="text-3xl text-yellow-400 font-bold"> $20</span> coupon for first shopping
    </h5>
    <p className="block font-sans text-base text-gray-400 ">
      Because it's about motivating the doers. Because I'm here to follow my
      dreams and inspire others.
    </p>
  </div>
  
  <div className="p-6 pt-0">
    <a
      className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
      href="#"
    >
      <button 
        className="flex items-center gap-2 px-4 py-2 font-sans text-xl font-bold text-center text-yellow-400 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
        data-aos="fade-up" 
      >
        Products
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Standard;
