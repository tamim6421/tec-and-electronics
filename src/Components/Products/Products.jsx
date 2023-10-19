import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProductCard from "./ProductCard";
import './Products.css'


const Products = () => {
    const allData = useLoaderData()
    const [products, setProduct] = useState([])
    const {brand} = useParams()
//     console.log(allData)
//    console.log(brand)

    useEffect(() =>{
        const findProduct = allData.filter( data => data.bName.trim() == brand)
        setProduct(findProduct)
    } ,[])

    // console.log(products)
 

    return (
        <div>
            <Navbar></Navbar>
            <div className=" containerP ">
            <div className="carousel h-[70vh] w-full overlyP">
<div id="slide1" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/yq93Y8V/pngtree-digital-electronic-poster-banner-image-877671.jpg" className="w-full" />
        <div className=" absolute top-40 w-3/4  left-52  text-white">
            <h2 className="text-4xl font-bold "></h2>
        </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle bg-gray-500">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/ky7dVs7/Screenshot-2.png" className="w-full" />

  <div className=" absolute top-40 w-3/4  left-52  text-white">
            <h2 className="text-4xl font-bold "> </h2>
        </div>

  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/X4DcPC3/138230199-kitchen-equipment-electronics-appliances-and-digital-products-sale-vector-illustration-fla.jpg" className="w-full" />

  <div className=" absolute top-40 w-3/4  left-52  text-white">
       
        </div>

  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div>


</div> 
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                {
                    products.map( (product, i) => <ProductCard key={i} product={product} ></ProductCard> )
                }
            </div>
        </div>
    );
};

export default Products;