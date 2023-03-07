import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../layout/DashBoardLayout';
import Main from '../layout/Main';
import AddProduct from '../pages/DashBoard/AddProduct/AddProduct';
import BuyerOrder from '../pages/DashBoard/BuyerOrder/BuyerOrder';
import SellerProducts from '../pages/DashBoard/SellerProduct/SellerProducts';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products/Products';
import Register from '../pages/Register/Register';
import { allProducts } from '../utilities/APIRoutes';
import BuyerRoute from './BuyerRoute';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/allProducts",
                loader: () => fetch(allProducts),
                element: <PrivateRoute><Products /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout />,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><SellerProducts /></SellerRoute>
            },
            {
                path: '/dashboard/buyerOders',
                element: <BuyerRoute><BuyerOrder /></BuyerRoute>
            },
        ]
    }
]);