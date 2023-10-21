import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Swal from 'sweetalert2'

import { AiOutlineRollback } from "react-icons/ai";


const UpdateProducts = () => {
    const productInfo = useLoaderData()
  const {_id, name, bName, photo, type, price, description, rating} = productInfo
    // console.log(productInfo)
    const navigate = useNavigate()

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const brandName = form.bName.value 
        const photo = form.photo.value
        const type = form.type.value 
        const price = form.price.value 
        const description = form.description.value
        const rating = form.rating.value
        const bName = brandName.toLowerCase()
        const updateProduct = {name, bName, photo, type, price, description, rating}
        // console.log(updateProduct)

        fetch(`https://tec-and-electronics-server.vercel.app/products/${_id}`,{
            method:"PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updateProduct)
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Update SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
               }
        })
    }

    const handleBack = () =>{
        navigate(-1)
    }


    return (
        <div>
              <div>
            <Navbar></Navbar>
            {/* <div className="text-center my-20">
        <h3
          className="text-center text-4xl text-gray-300 font-semibold"
          data-aos="fade-down"
        >
      
          Update Your Product
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>
        <p className="text-gray-400 mt-4" data-aos="fade-up">
          One of the hardest things about wedding planning is deciding on your
          vision. You might want some elements
        </p>
      </div> */}

        
      <div className="w-3/4 mx-auto bg-base-100 mt-20 p-5 shadow-lg mb-20">
      <h3
          className="text-center my-10 mt-10 text-4xl  font-semibold"
          data-aos="fade-down"
        >
      
           Update Your <span className="text-yellow-400">Product Info</span>
           <p className="text-2xl text-orange-300 ">{name} </p>
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>



        <form onSubmit={handleUpdate}>
        <div className="md:flex gap-4  mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300 text-lg font-semibold  " data-aos="fade-up">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  required
                  defaultValue={name}
                  className="input input-bordered w-full"
                  data-aos="fade-up"

                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-down" >Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="bName"
                  defaultValue={bName}
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
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-up">Product Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
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
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-up"> Types Of Products</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  required
                  defaultValue={type}
                  placeholder="Types Of Products"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-down">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
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
                <span className="label-text text-orange-300 text-lg font-semibold " data-aos="fade-up">Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  required
                  placeholder="Short description"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-down">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Rating"
                  defaultValue={rating}
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
            value="Update Product"
            className="btn btn-block  bg-yellow-200 hover:bg-yellow-300"
            id=""
            data-aos="fade-down"
          />
        </form>

        {/* <div className="my-10">
        <Link to='/coupleInfo'>
        <button className="btn block mx-auto w-full text-white bg-rose-300 hover:bg-rose-400" data-aos="fade-up">See Info</button>
        </Link>
      </div> */}
         <button onClick={handleBack} className="btn my-10 block mx-auto  bg-rose-200" data-aos="fade-down"><AiOutlineRollback className="text-red-400 text-3xl"></AiOutlineRollback></button>
      </div>
     


        </div>
        </div>
    );
};

export default UpdateProducts;