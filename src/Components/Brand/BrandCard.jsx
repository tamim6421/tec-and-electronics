import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ item }) => {

  const { brand_name, brand_image, id } = item;
  const navigate = useNavigate()
  const [products, setProduct] = useState([])

  const [displayProduct , setDisplayProduct ] = useState([])
//   console.log(products)
    
useEffect( () =>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data =>{
        setProduct(data)
    })
} ,[])


// const filterProduct = products.filter(product => product.bName == brand_name)
// console.log(filterProduct)


    const handleNavigate = () =>{
        navigate(`/products/${brand_name}`)
    }


  return (
    <div className="" data-aos="zoom-in-down"  >
      <div  onClick={handleNavigate} className="card box mb-36 h-[250px] cursor-pointer  bg-base-100 drop-shadow-xl" >
        <figure className="px-10 pt-10">
          <img
            src={brand_image}
            alt="Shoes"
            className="rounded-xl w-36"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl text-gray-500 drop-shadow-xl">{brand_name}</h2>
         
          <div className="card-actions">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
