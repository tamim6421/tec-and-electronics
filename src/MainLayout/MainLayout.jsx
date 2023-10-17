import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            this is main

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;