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
import ShowProducts from "../Pages/ShowProducts/ShowProducts";
import Contact from "../Pages/Contact/Contact";
import PaymentSuccess from "../Pages/MyCart/PaymentSuccess";
import PaymentFail from "../Pages/MyCart/PaymentFail";


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
                loader: () => fetch('http://localhost:5000/carts')
            },
            // payment route 
            {
                path:'/payment/success/:tranId',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path:'/payment/fail/:tranId',
                element: <PaymentFail></PaymentFail>
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
                loader: ()=> fetch('http://localhost:5000/products')
            },
            {
                path: '/update/:id',
                element:<PrivetRoute><UpdateProducts></UpdateProducts></PrivetRoute>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/allProducts',
                element: <ShowProducts></ShowProducts>,
                loader: ()=> fetch('http://localhost:5000/products')
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default router;