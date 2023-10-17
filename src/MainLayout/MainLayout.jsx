import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
         

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;