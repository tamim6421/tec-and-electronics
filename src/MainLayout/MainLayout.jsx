import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
         
            
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;