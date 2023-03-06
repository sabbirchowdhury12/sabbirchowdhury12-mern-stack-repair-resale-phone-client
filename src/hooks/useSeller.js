import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userSellerRoute } from '../utilities/APIRoutes';

const useSeller = email => {

    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`${userSellerRoute}/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                });
        }
    }, [email]);

    return [isSeller, isSellerLoading];
};
export default useSeller;