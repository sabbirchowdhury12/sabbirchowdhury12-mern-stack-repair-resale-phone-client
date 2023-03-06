import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import date from '../../components/date';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { orderRoute } from '../../utilities/APIRoutes';

const BookModal = ({ product, setProduct }) => {

    const { modelName, resalePrice, img, _id } = product;
    const fulldate = date();

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleBooking = async (data) => {

        const { name, email, price, modelName, location, phone } = data;

        const order = {
            name,
            email,
            price,
            modelName,
            location,
            phone,
            product_id: _id,
            fulldate,
            img
        };

        await axios.post(orderRoute, {
            order
        }).then(res => {
            console.log(res);
            if (res.data.acknowledged) {
                toast.success('register done');
                setProduct(null);
            }
        }).catch(err => console.log(err));
    };

    const handleDelete = () => {
        setProduct(null);
    };


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn  btn-sm btn-circle absolute right-2 top-2" onClick={handleDelete}>✕</label>
                    <p className='font-bold'>Book A Phone</p>
                    <form onSubmit={handleSubmit(handleBooking)} className='grid grid-cols-1 gap-3 mt-2'>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("name", {
                                        required: "name is Required"
                                    })}
                                    type="text"
                                    name="name"
                                    placeholder=''
                                    className="block text-lg p-2  border shadow w-full mt-1 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={user?.displayName}
                                />
                            </div>
                        </div>

                        <div >
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("email", {
                                        required: "email is Required"
                                    })}
                                    type="email"
                                    name="email"
                                    value={user?.email}
                                    readOnly
                                    className=" text-lg p-2  border shadow block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Phone- Model Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("modelName", {
                                        required: "modelName is Required"
                                    })}
                                    type="text"
                                    name="name"
                                    placeholder=''
                                    className="block text-lg p-2  border shadow w-full mt-1 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={product.modelName}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Price
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("price", {
                                        required: "price is Required"
                                    })}
                                    type="text"
                                    name="price"
                                    placeholder=''
                                    value={product.resalePrice}
                                    className="block text-lg p-2  border shadow w-full mt-1 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Location
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("location", {
                                        required: "location is Required"
                                    })}
                                    type="text"
                                    name="location"
                                    placeholder=''
                                    className="block text-lg p-2  border shadow w-full mt-1 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Phone Number
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("phone", {
                                        required: "phone is Required"
                                    })}
                                    type="text"
                                    name="phone"
                                    placeholder=''
                                    className="block text-lg p-2  border shadow w-full mt-1 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <br />
                        <input className='' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};
export default BookModal;