import React from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUserRole from '../../../hooks/useUserRole';
import { handleDelete } from '../../../utilities/handleDeleteUser';
import { RiDeleteBinLine, RiEarthFill } from "react-icons/ri";



const AllSeller = () => {

    const { users, refetch } = useUserRole('seller');

    return (
        <div>
            {
                users?.length ?
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
                                                    User Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                >
                                                    user status
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
                                                users?.map((user, i) => {
                                                    const { name, email, img, _id } = user;
                                                    return (
                                                        <tr>
                                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                                {i + 1}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                {name}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                                {email}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                                <button
                                                                    className="text-green-500 hover:text-green-700"
                                                                    href="#"
                                                                >
                                                                    {user.status ? 'verified' : 'verify'}
                                                                </button>
                                                            </td>
                                                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                                <button onClick={() => handleDelete(_id, refetch)}
                                                                    className="text-red-500 hover:text-red-700"
                                                                    href="#"
                                                                >
                                                                    <RiDeleteBinLine size={25} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
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


export default AllSeller;