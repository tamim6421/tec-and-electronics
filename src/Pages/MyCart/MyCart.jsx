import { json, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineRollback } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { data } from "autoprefixer";



const MyCart = () => {
const allProducts = useLoaderData();
const {user} = useContext(AuthContext) 
// console.log(user)
const userData = JSON.parse(localStorage.getItem('user'));
 const filterProductByEmail = userData == null ? allProducts : allProducts.filter( item => item.email == userData.email )
  const [products, setProducts] = useState(filterProductByEmail);
  const navigate = useNavigate()

  // console.log(products);

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
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = products.filter((use) => use._id !== id);
              setProducts(remaining);

              // this reload user for change the cart icon product length
              // window.location.reload(false)
            }
          });
      }
    });
  };

  const handleBack = () =>{
    navigate(-1)
  }


  const handelPayment = (product) =>{
    const paymentInfo ={
      userEmail : user?.email,
      name: user?.displayName,
      productName: product.name,
      brandName: product.bName,
      price: parseFloat( product.price),
      productId: product._id,
    }
    console.log(paymentInfo)

    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(paymentInfo)
    })
    .then(res => res.json())
    .then( data =>{
      window.location.replace(data.url)
      console.log(data)
    })

  }


  return (
    <div>
      <Navbar></Navbar>
      
      <div className="grid gap-4 grid-cols-1 my-20 px-3 p-1">
      <h1 className="text-xl font-semibold">Your Added Products : <span className="text-2xl text-red-400">{products.length}</span> </h1>
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
                    onClick={() => handelPayment(product)}
                    className="btn bg-green-200"
                    data-aos="fade-up"
                  >
                   Payment 
                  </button>


                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-red-200"
                    data-aos="fade-up"
                  >
                    <AiFillDelete className="text-3xl text-red-500 " ></AiFillDelete>
                  </button>
                  <button onClick={handleBack} className="btn bg-yellow-50" data-aos="fade-down"><AiOutlineRollback className="text-green-400 text-3xl"></AiOutlineRollback></button>


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
