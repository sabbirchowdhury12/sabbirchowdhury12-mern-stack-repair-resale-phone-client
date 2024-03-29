import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useSeller from '../hooks/useSeller';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>;
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/dashboard/buyerOders" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;