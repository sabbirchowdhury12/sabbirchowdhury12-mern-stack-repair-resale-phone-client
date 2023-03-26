import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { productRoute } from '../../../utilities/APIRoutes';
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const SellerProducts = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`${productRoute}?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('User-Token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading />;
    }

    const handleDelete = async (id) => {
        await axios.delete(`${productRoute}/${id}`).then(res => {
            if (res.data.acknowledged === true) {
                toast.success('add success');
                refetch();
            } else { toast.error('failed'); }

        }).catch(err => console.log(err));
    };

    return (
        <div>
            {
                products.length ?
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="p-1.5 w-full inline-block align-middle">
                                <div className="overflow-hidden border rounded-lg">

                                    <table className="min-w-full divide-y divide-gray-200">

                                        <thead className="bg-gray-50">



                                            <tr>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Phone Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    sale status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    Delete
                                                </th>
                                            </tr>


                                        </thead>

                                        <tbody className="divide-y divide-gray-200">

                                            {
                                                products.map((product, i) => <tr key={i}>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {i + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {product.modelName}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {product.price}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button
                                                            className="text-green-500 hover:text-green-700"
                                                            href="#"
                                                        >
                                                            {product.status ? 'sold' : 'available'}
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button onClick={() => handleDelete(product._id)}
                                                            className="text-red-500 hover:text-red-700"
                                                            href="#"
                                                        >
                                                            <RiDeleteBinLine size={25} />
                                                        </button>
                                                    </td>
                                                </tr>
                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> : "NO PRODUCT AVAILAVLE"
            }
        </div>
    );
};

export default SellerProducts;