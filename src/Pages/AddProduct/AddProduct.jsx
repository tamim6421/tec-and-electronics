
import Navbar from "../../Components/Navbar/Navbar";


const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault()

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center my-20">
        <h3
          className="text-center text-4xl text-gray-300 font-semibold"
          data-aos="fade-down"
        >
      
          Add Your Product
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>
        <p className="text-gray-400 mt-4" data-aos="fade-up">
          One of the hardest things about wedding planning is deciding on your
          vision. You might want some elements
        </p>
      </div>

        
      <div className="w-3/4 mx-auto bg-gray-50 p-5 shadow-lg mb-20">
      <h3
          className="text-center my-10 mt-10 text-4xl text-pink-300 font-semibold"
          data-aos="fade-down"
        >
      
          Input Product Information
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>

        <form onSubmit={handleAddProduct}>
        <div className="md:flex gap-4  mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold  " data-aos="fade-up">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  required
                  className="input input-bordered w-full"
                  data-aos="fade-up"

                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-down" >Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="bName"
                  required
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-up">Product Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                
                  placeholder="Product Photo URL"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-up"> Types Of Products</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  required
                  placeholder="Types Of Products"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-down">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  required
                  name="price"
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>


          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-up">Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  required
                  placeholder="Short description"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-gray-500 text-lg font-semibold " data-aos="fade-down">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Rating"
                    required
                  name="rating"
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

         

          <input
            type="submit"
            name=""
            value="Add Product"
            className="btn btn-block text-white bg-gray-300 hover:bg-gray-400"
            id=""
            data-aos="fade-down"
          />
        </form>

        {/* <div className="my-10">
        <Link to='/coupleInfo'>
        <button className="btn block mx-auto w-full text-white bg-rose-300 hover:bg-rose-400" data-aos="fade-up">See Info</button>
        </Link>
      </div> */}

      </div>
     


        </div>
    );
};

export default AddProduct;