import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";


const PaymentSuccess = () => {
    const {tranId} = useParams()
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="my-20">
            <h1 className="text-center text-3xl text-green-500">Payment Successful</h1>
            <p className="text-center text-orange-400">Transaction Id : {tranId} </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;