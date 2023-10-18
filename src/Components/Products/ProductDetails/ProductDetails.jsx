import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const ProductDetails = () => {
  const loadedProducts = useLoaderData();
  const { _id, name, bName, photo, type, price, description, rating } =
    loadedProducts;


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
            <h2 className="card-title">{name}</h2>
            <h2 className="card-title">{bName}</h2>
            <h2 className="card-title">{type}</h2>
            <div>
                <h1> {rating} </h1>
                <h1>{price} </h1>
            </div>
            <p>{description} </p>
            <div className="card-actions ">
              <button className="btn btn-primary">Delete</button>
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
