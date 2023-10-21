
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { AiFillEdit  } from "react-icons/ai";

import { BiSolidDetail } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const AllProductsCards = ({product}) => {
    const{_id, name, bName, price, type, rating, photo} = product
    console.log(product)

    const startGenerate = (rating) => {
      const [selected, setSelected] = useState();
      return Array(rating)
        .fill()
        .map((item, i) => (
          <Start
            key={i}
            selected={selected > i}
            onSelected={() => setSelected(i + 1)}
          />
        ));
    };
    
    const Start = ({ selected, onSelected }) => {
      return <FaStar color={selected ? "red" : "gray"} onClick={onSelected} />;
    };



    return (
        <div>
             <div>
            <div className="relative flex flex-col  text-gray-400 bg-white shadow-md rounded-xl bg-clip-border p-2" data-aos="zoom-in-down">
  <div className="box relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
    <img
      src={photo}
      className="object-cover w-full h-[300px]"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900" data-aos="zoom-in-up">
       {name}
       
      </p>
      <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-rose-400" data-aos="fade-up">
         <span className="text-yellow-400 text-2xl font-semibold">$</span> {price}
      </p>
    </div>
  <div className="flex justify-between items-center">
  <div>
   <p className="block font-sans text-lg antialiased font-normal leading-normal text-gray-700 opacity-75" data-aos="zoom-in-down">
      {bName}
      <div className="badge ml-2 text-white badge-error">NEW</div>
    </p>
    <p className="block font-sans text-xl antialiased font-normal leading-normal text-gray-700 opacity-75">
      {type}
      
    </p>
    
   </div>
 <div>
 {/* <div className="rating rating-sm flex items-center gap-1">
    
    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
    <h1>{rating} </h1>
  </div> */}

 <div className="flex items-center ">
 {
    startGenerate(5)
  }
  <h1 className="ml-1">{rating} </h1>
 </div>
 
 </div>
  </div>
  
  </div>
  <div className="p-6 flex justify-between pt-0">
  <Link to={`/update/${_id}`} > <button className="btn btn-sm mr-4 bg-red-100" data-aos="zoom-in-up"> 
  edit
  <AiFillEdit className="text-3xl text-yellow-500 "></AiFillEdit>
  
  </button></Link>


   <Link to={`/details/${_id}`}><button className="btn btn-sm bg-yellow-100"  data-aos="zoom-in-down">
   
  <BiSolidDetail  className="text-3xl text-yellow-500 "></BiSolidDetail>
 details
</button></Link>
  </div>

</div>
            </div>
        </div>
    );
};

export default AllProductsCards;