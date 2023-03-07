import React, { useEffect, useState } from 'react';
import { userAdminRoute } from '../utilities/APIRoutes';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`${userAdminRoute}/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });
        }
    }, [email]);

    return [isAdmin, isAdminLoading];
};
export default useAdmin;