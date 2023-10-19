import {
  FaBabyCarriage,
  FaFileInvoice,
  FaUserSecret,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="my-36">
      <div className="text-center my-20">
        <h3
          className="text-center text-4xl text-yellow-300 font-semibold"
          data-aos="fade-down"
        >
          We Support Our Client
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>
        <p className="text-gray-400 mt-4" data-aos="fade-up">
          We offer competitive price on our 100 million product my range
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <div className="card  mb-5 drop-shadow-md" data-aos="fade-down">
          <figure className="px-10 pt-10">
            <FaBabyCarriage className="text-5xl"></FaBabyCarriage>
          </figure>
          <div className="card-body box items-center text-center">
            <h2 className="card-title">World Delivery</h2>
            <p>
              {" "}
              We offer competitive price on our 100 million product my range
            </p>
          </div>
        </div>
        <div className="card  mb-5 drop-shadow-md" data-aos="fade-up">
          <figure className="px-10 pt-10">
            <FaFileInvoice className="text-5xl"></FaFileInvoice>
          </figure>
          <div className="card-body box items-center text-center">
            <h2 className="card-title">Safe Payment</h2>
            <p>
              {" "}
              We offer competitive price on our 100 million product my range
            </p>
          </div>
        </div>
        <div className="card  mb-5 drop-shadow-md" data-aos="fade-down">
          <figure className="px-10 pt-10">
            <FaUserSecret className="text-5xl"></FaUserSecret>
          </figure>
          <div className="card-body box items-center text-center">
            <h2 className="card-title">Shop With Confidence Delivery</h2>
            <p>
              {" "}
              We offer competitive price on our 100 million product my range
            </p>
          </div>
        </div>
        <div className="card  mb-5 drop-shadow-md" data-aos="fade-up">
          <figure className="px-10 pt-10">
            <FaHeadset className="text-5xl"></FaHeadset>
          </figure>
          <div className="card-body box items-center text-center">
            <h2 className="card-title">24/77 Support </h2>
            <p>
              {" "}
              We offer competitive price on our 100 million product my range
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
