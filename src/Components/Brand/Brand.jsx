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
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
            {
                brand?.map(item => <BrandCard 
                    key={item.id} 
                    item={item}></BrandCard> )
            }
        </div>
    );
};

export default Brand;