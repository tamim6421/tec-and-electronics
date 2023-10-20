import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import AllProductsCards from "./AllProductsCards";


const ShowProducts = () => {
    const allProducts = useLoaderData()
    // console.log(allProducts)
    return (
        <div>
            <Navbar></Navbar>
          
          <div>
            <img src="https://i.ibb.co/X4DcPC3/138230199-kitchen-equipment-electronics-appliances-and-digital-products-sale-vector-illustration-fla.jpg" alt="" className="w-full" />

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allProducts?.map(product => <AllProductsCards key={product._id} product={product}></AllProductsCards> )
                }
            </div>
          </div>
        </div>
    );
};

export default ShowProducts;