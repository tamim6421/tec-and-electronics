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


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
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
                element:<MyCart></MyCart>
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
                element:<UpdateProducts></UpdateProducts>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/details/:id',
                element:<ProductDetails></ProductDetails>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])

export default router;