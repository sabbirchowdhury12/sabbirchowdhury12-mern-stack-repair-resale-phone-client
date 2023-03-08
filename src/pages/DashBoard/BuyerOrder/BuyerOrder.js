import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { orderRoute } from '../../../utilities/APIRoutes';
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const BuyerOrder = () => {

    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`${orderRoute}?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = async (id) => {
        await axios.delete(`${orderRoute}/${id}`).then(res => {
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
                                                    Payment
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
                                                products.map((product, i) => <tr>
                                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                        {i + 1}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        <div className='flex items-center justify- gap-2'>
                                                            <img className='h-10 w-10 rounded-full' src={product.img} alt="" />
                                                            <p>{product.modelName}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                        {product.price}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                        <button
                                                            className="bg-secondary text-white font-bold p-2 rounded hover:text-gray-600"

                                                        >
                                                            {product.status ? 'paid' : <Link to={`/dashboard/payment/${product._id}`}> pay now </Link>}
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

export default BuyerOrder;