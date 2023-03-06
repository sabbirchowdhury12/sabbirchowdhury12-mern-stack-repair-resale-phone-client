import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { my_Product } from '../../../utilities/APIRoutes';

const SellerProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`${my_Product}?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading />;
    }

    console.log(products);
    return (
        <div>

        </div>
    );
};

export default SellerProducts;