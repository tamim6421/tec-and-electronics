import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useState } from "react";


const ProductDetails = () => {

  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState({})
  const { _id, name, bName, photo, type, price, description, rating } =
    loadedProducts;
 

    const handleAddToCart = (products) =>{
      console.log('card added', products)

      fetch('http://localhost:5000/carts',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(loadedProducts)
    })

    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            alert('added')
        }
    })

    }


  return (
    <div>
      <Navbar></Navbar>
      <h3>{name}</h3>
      <h3></h3>
      <div>
        <div className="card card-side p-3 flex flex-col md:flex-row bg-base-100 shadow-xl">
         <div>
         <figure>
            <img
              src={photo}
              alt="Movie"
              className="w-[380px] h-[500px]"
            />
          </figure>
         </div>
          <div className="card-body">
            <h2 className="card-title">{name}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <h2 className="card-title">{bName}</h2>
            <h2 className="card-title">{type}</h2>
            <div>
                <h1> {rating} </h1>
                <h1>{price} </h1>
            </div>
            <p>{description} </p>
            <div className="card-actions ">
              
              <button onClick={() =>handleAddToCart(loadedProducts)} className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
