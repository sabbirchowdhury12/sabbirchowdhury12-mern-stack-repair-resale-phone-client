import { async } from '@firebase/util';
import axios from 'axios';
import React, { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import date from '../../../components/date';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { add_Product, productRoute } from '../../../utilities/APIRoutes';

const inputStyle = 'mt-1 text-lg p-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow  border-gray-300 rounded-md';

const labelStyle = 'block text-sm font-medium text-gray-700';

const AddProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useContext(AuthContext);
    const fulldate = date();


    const handleAddProduct = async (data) => {
        const { category_id, condition, img, desc, email, location, modelName, name, phone, price } = data;
        console.log(data);

        const product = {
            category_id, condition, desc, img, location, modelName, phone, price,
            name: user.displayName,
            email: user.email,
            date: fulldate
        };

        await axios.post(productRoute, {
            product
        }).then(res => {
            if (res.data.acknowledged === true) {
                console.log('success');
                toast.success('add success');
                reset();
            } else { toast.error('failed'); }

        }).catch(err => console.log(err));
    };


    return (
        <div class="mt-1 text-lg p-2 0 sm:mt-0">
            <div class="mt-5 md:mt-0 md:col-span-2 flex justify-center items-center">
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first_name" class={`${labelStyle}`}> Name</label>
                                    <input
                                        {...register("name", {
                                            // required: "name is Required"
                                        })}
                                        value={user?.displayName}
                                        readOnly
                                        disabled
                                        type="text" name="name" id="first_name" autocomplete="given-name" class={`${inputStyle}`} />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last_name" class={`${labelStyle}`}>Email</label>
                                    <input
                                        {...register("email", {
                                            // required: "email is Required"
                                        })}
                                        value={user?.email}
                                        readOnly
                                        disabled
                                        type="text" name="email" id="last_name" autocomplete="family-name" class={`${inputStyle}`} />
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </div>



                                <div class="col-span-6 sm:col-span-3">
                                    <label for="country" class={`${labelStyle}`}>Brand</label>
                                    <select

                                        id="country" name="country" autocomplete="country" class="mt-1 text-lg p-2  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...register("category_id", {
                                            required: "category_id is Required"
                                        })}
                                    >
                                        <option value='01'>Xiomi</option>
                                        <option value='03'>I-Phone</option>
                                        <option value='02'>Symphony</option>
                                    </select>
                                    {errors.category_id && <p className='text-red-500'>{errors.category_id.message}</p>}
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="country" class={`${labelStyle}`}>Condition</label>
                                    <select id="country" name="country" autocomplete="country" class="mt-1 text-lg p-2  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...register("condition", {
                                            required: "condition is Required"
                                        })}
                                    >
                                        <option value='Excellent'>Excellent</option>
                                        <option value='Good'>Good</option>
                                        <option value='Fair'>Fair</option>
                                    </select>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email_address" class={`${labelStyle}`}>Model Name</label>
                                    <input
                                        {...register("modelName", {
                                            required: "modelName is Required"
                                        })}
                                        type="text" name="modelName" id="email_address" autocomplete="email" class={`${inputStyle}`} />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="email_address" class={`${labelStyle}`}>Photo URL</label>
                                    <input
                                        {...register("img", {
                                            required: "img is Required"
                                        })}
                                        type="text" name="img" id="email_address" autocomplete="email" class={`${inputStyle}`} />
                                </div>

                                <div class="col-span-6">
                                    <label for="street_address" class={`${labelStyle}`}> Description</label>
                                    <textarea
                                        {...register("desc", {
                                            required: "desc is Required"
                                        })}
                                        type="text" name="desc"
                                        placeholder='write something about phone' id="street_address" autocomplete="street-address" class={`${inputStyle}`} />
                                </div>

                                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label for="city" class={`${labelStyle}`}>Location</label>
                                    <input
                                        {...register("location", {
                                            required: "location is Required"
                                        })}
                                        type="text" name="location" id="city" class={`${inputStyle}`} />
                                </div>

                                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label for="state" class={`${labelStyle}`}>Price</label>
                                    <input
                                        {...register("price", {
                                            required: "price is Required"
                                        })}
                                        type="text" name="price" id="state" class={`${inputStyle}`} />
                                </div>

                                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label for="postal_code" class={`${labelStyle}`}>Phone Number</label>
                                    <input
                                        {...register("phone", {
                                            required: "phone is Required"
                                        })}
                                        type="text" name="phone" id="postal_code" autocomplete="postal-code" class={`${inputStyle}`} />
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add Product
                            </button>
                            {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;