import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../components/Loading';
import { userRoute } from '../utilities/APIRoutes';

const useUserRole = role => {

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${userRoute}/${role}`);
            const data = await res.json();
            // console.log(data);
            return data;
        }
    });

    if (isLoading) {
        return <Loading />;
    }

    return { users, refetch };

};

export default useUserRole;