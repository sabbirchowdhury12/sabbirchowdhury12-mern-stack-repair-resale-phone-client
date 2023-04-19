import { useQueries } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {

    const { sendEmail } = useContext(AuthContext);
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();


    const sendResetLink = (data) => {
        sendEmail(data.email)
            .then(() => {
                toast.success('Email sent. Cheack your inbox');
                navigate('/login');
            })
            .catch(err => toast.error('something wrong. Try again'));
    };

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-secondary">
                            LOGIN
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit(sendResetLink)}>

                        <div className="mt-4">
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
                                    className=" text-lg p-2  border shadow block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        {/* <button onClick={History.back()}
                            href="#"
                            className="text-xs  text-secondary hover:underline"
                        >
                            back
                        </button > */}
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 text-white   rounded-md bg-primary focus:outline-none  font-bold">
                                Send Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;