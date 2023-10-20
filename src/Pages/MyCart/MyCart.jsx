import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaBackspace } from "react-icons/fa";

const MyCart = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts);
  const navigate = useNavigate()

//   console.log(products);

  const handleDelete = (id) => {
    // console.log("delete", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tec-and-electronics-server.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = products.filter((use) => use._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  const handleBack = () =>{
    navigate(-1)
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="grid gap-4 grid-cols-1 my-20 px-3 p-1">
     
        {products.map((product) => (
          <div key={product._id}>
           
            <div className="card card-side flex flex-col md:flex-row bg-base-100 p-4 shadow-xl">
              <div>
              <figure className="box">
                <img src={product.photo} alt="Movie" className="w-80 h-80" data-aos="zoom-in" />
              </figure >
              </div>
              <div className="card-body">
                <h2 className="card-title text-2xl text-yellow-400" data-aos="fade-down">{product.name}</h2>
                <h1> <span className="text-xl" data-aos="fade-up"> {product.bName}</span> {product.type} </h1>
                <h1 className="text-rose-400 font-semibold" data-aos="fade-down"> <span className="text-yellow-500 text-3xl"> $</span>  {product.price} </h1>
                <p>{product.description}</p>
                
                <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" data-aos="fade-down" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" data-aos="fade-up" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" data-aos="fade-down"/>

                </div>
       

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-red-200"
                    data-aos="fade-up"
                  >
                    <AiFillDelete className="text-3xl text-red-500 " ></AiFillDelete>
                  </button>
                  <button onClick={handleBack} className="btn bg-yellow-200" data-aos="fade-down"><FaBackspace className="text-red-400 text-3xl"></FaBackspace></button>


                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
