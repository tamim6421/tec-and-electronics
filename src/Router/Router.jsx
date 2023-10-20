import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../PrivetRaout/PrivetRoute";
import Products from "../Components/Products/Products";
import UpdateProducts from "../Components/Products/UpdateProducts/UpdateProducts";
import ProductDetails from "../Components/Products/ProductDetails/ProductDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/addProduct',
                element:<PrivetRoute><AddProduct></AddProduct></PrivetRoute>
            },
            {
                path:'/MyCart',
                element:<PrivetRoute><MyCart></MyCart></PrivetRoute>,
                loader: () => fetch('https://tec-and-electronics-server.vercel.app/carts')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path: '/products/:brand',
                element: <Products></Products>,
                loader: ()=> fetch('https://tec-and-electronics-server.vercel.app/products')
            },
            {
                path: '/update/:id',
                element:<PrivetRoute><UpdateProducts></UpdateProducts></PrivetRoute>,
                loader:({params}) => fetch(`https://tec-and-electronics-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
                loader:({params}) => fetch(`https://tec-and-electronics-server.vercel.app/products/${params.id}`)
            }
        ]
    }
])

export default router;