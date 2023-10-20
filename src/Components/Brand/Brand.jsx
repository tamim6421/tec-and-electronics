import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Brand = () => {
    const [brand, setBrand] = useState([])
  
    useEffect( () =>{
        fetch('/brand.json')
        .then(res => res.json())
        .then(data => setBrand(data))
    } ,[])

   



 
    return (
        <div className="">
            <div className="">
            <div className="text-center my-20">
        <h3
          className="text-center text-4xl px-2 text-yellow-300 font-semibold"
          data-aos="fade-down"
        >
          Choose Your Favorite Brand 
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>
        <p className="text-gray-400 mt-4" data-aos="fade-up">
          We offer competitive price on our 100 million product my range
        </p>
      </div>

            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
            {
                brand?.map(item => <BrandCard 
                    key={item.id} 
                    item={item}></BrandCard> )
            }
        </div>
        </div>
    );
};

export default Brand;