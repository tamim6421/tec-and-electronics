import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineRollback } from "react-icons/ai";
import Swal from "sweetalert2";


const ProductDetails = () => {

  const loadedProducts = useLoaderData();
 const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const { _id, name, bName, photo, type, price, description, rating } =
    loadedProducts;
 

    const handleAddToCart = (products) =>{
      console.log('card added', products)

      fetch('https://tec-and-electronics-server.vercel.app/carts',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(loadedProducts)
    })

    .then(res => res.json())
    .then(data =>{
        // console.log(data)
        if(data.insertedId){
          Swal.fire(
            'Success!',
            'Product Added To Cart!',
            'success'
          )
        }
    })

    }

    const handleBack = () =>{
      navigate(-1)
    }


  return (
    <div>
      <Navbar></Navbar>
      
      
      <div className="my-36">
        <div className="card card-side p-3 flex flex-col md:flex-row bg-base-100">
         <div>
        
         <figure className="box">
            <img
              src={photo}
              alt="Movie"
              className="w-[380px] h-[500px]"
            />
          </figure>
         </div>
          <div className="card-body justify-center space-y-4">
          <h3 className="text-center text-3xl text-gray-500" data-aos="fade-up">Product Details 
          <hr className="border-2 border-yellow-300" data-aos="fade-down" />
          </h3>
            <h2 className="card-title text-2xl" data-aos="fade-up">{name}
            <div className="badge badge-warning p-3"data-aos="fade-down" >NEW</div>
            </h2>
            <h2 className="card-title " data-aos="fade-up">{bName} {type} </h2>
          
            <div>
              <div>
             
              <div className="rating rating-md flex items-center gap-1" data-aos="fade-down">
              <h1> {rating} </h1>
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />

              </div>
              </div>
                <h1 className="text-xl" data-aos="fade-up"> <span className="text-3xl text-yellow-400 font-bold"> $</span> {price} </h1>
            </div>
            <p data-aos="fade-down">{description} </p>
            <div className="card-actions ">
              <button
               onClick={() =>handleAddToCart(loadedProducts)} className="btn bg-yellow-300 " data-aos="fade-up">add to cart
               <BsFillCartCheckFill className="text-red-400 text-3xl"></BsFillCartCheckFill>
               </button>
               <button onClick={handleBack} className="btn bg-yellow-50" data-aos="fade-down"><AiOutlineRollback className="text-green-400 text-3xl"></AiOutlineRollback></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
