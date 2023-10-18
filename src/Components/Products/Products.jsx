import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProductCard from "./ProductCard";


const Products = () => {
    const allData = useLoaderData()
    const [products, setProduct] = useState([])
    const {brand} = useParams()
   

    useEffect(() =>{
        const findProduct = allData.filter( data => data.bName == brand)
        setProduct(findProduct)
    } ,[])

    console.log(products)

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="carousel h-[60vh] w-full">
<div id="slide1" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/4m5GdgG/pexels-noah-erickson-404280.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/qW4VWY3/pexels-timson-foox-2182863.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/VwqYFds/pexels-david-bares-323687.jpg" className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div>


</div> 
            </div>
            <div>
                {}
            </div>
        </div>
    );
};

export default Products;