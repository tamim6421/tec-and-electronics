import Navbar from "../../Components/Navbar/Navbar";


const PaymentFail = () => {
    
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
            <div className="my-20">
            <h1 className="text-center text-3xl text-red-500">Payment Failed</h1>
           
            </div>
        </div>
    );
};

export default PaymentFail;