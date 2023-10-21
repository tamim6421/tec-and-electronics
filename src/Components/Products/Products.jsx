import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ProductCard from "./ProductCard";
import './Products.css'


const Products = () => {
    const allData = useLoaderData()
    const [products, setProduct] = useState([])
    const {brand} = useParams()
    const navigate = useNavigate()
//     console.log(allData)
//    console.log(brand)

    useEffect(() =>{
        const findProduct = allData.filter( data => data.bName.trim() == brand)
          setProduct(findProduct)
    } ,[])

    const handleBack = () =>{
      navigate('/')
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mb-20">
            <div className="carousel h-[60vh] w-full mb-20">
<div id="slide1" className="carousel-item relative w-full">
  <img src="https://i.ibb.co/gTyhnjY/Electronics-Shop-Facebook-Ad-Template.webp" className="w-full" />
        <div className=" absolute top-40 w-3/4  left-52  text-white">
            <h2 className="text-4xl font-bold "></h2>
        </div>
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle bg-gray-100">❮</a> 
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
           {
            products.length === 0 ? <div>
                          <div className="card mb-10 bg-base-100 ">
            <figure className="px-10 pt-10">
              <img src="https://i.ibb.co/RCGwR3t/no-product-found.png" alt="Shoes" className="rounded-xl" />
            </figure>
              <button onClick={handleBack} className="btn w-[100px] mx-auto bg-yellow-300">Back</button>
          </div>

            </div> : 

                  <div>
                       <div className="text-center mb-20">
        <h3
          className="text-center text-4xl  text-yellow-300 font-semibold"
          data-aos="fade-down"
        >
          Our Latest Products
          <hr
            className=" border-2 w-24 mt-2 border-orange-500 mx-auto"
            data-aos="fade-up"
          />
        </h3>
        <p className="text-gray-400 mt-4" data-aos="fade-up">
          We offer competitive price on our 100 million product my range
        </p>
      </div>

                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {
                      products.map( (product, i) => <ProductCard key={i} product={product} ></ProductCard> )
                  }
                  </div>


                  </div>

                
           }
        </div>
    );
};

export default Products;