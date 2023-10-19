import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Cart from "./Cart";


const MyCart = () => {
    const allProducts = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>

            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-1">
                {
                    allProducts.map( product => <Cart key={product._id} product={product}></Cart> )
                }
            </div>
        </div>
    );
};

export default MyCart;