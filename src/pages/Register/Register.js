import { async } from '@firebase/util';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { jwt, userRoute } from '../../utilities/APIRoutes';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUserWithEmail, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // const [file, setFile] = useState(null);
    // const image = useImage(file);
    // console.log(image);

    const handleSignUp = (data) => {
        const { name, email, password, role } = data;
        createUserWithEmail(email, password)
            .then(result => {
                const userInfo = {
                    displayName: name,
                };
                //update user
                updateUser(userInfo)
                    .then(result => {
                        saveUser(name, email, role);

                    }).catch(err => console.log(err));
            }).catch(err => toast.error('register failed'));
        // const img = files[0];
        // const formData = new FormData();
        // formData.append('image', img);

        // const url = 'https://api.imgbb.com/1/upload?key=8fd3dbe5918be63ad82f01b3fb69d14a';
        // fetch(url, { method: 'POST', body: formData })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         console.log(imgData);
        //         if (imgData.success) {
        //             const profile = imgData.data.url;
        //             console.log(profile);
        //         }
        //     });
    };

    const saveUser = async (name, email, role) => {
        const user = { name, email, role };
        await axios.post(userRoute, {
            user
        }).then(res => {
            if (res.data.acknowledged === true) {
                toast.success('register done');
                handleJWT(email);
            }
        }).catch(err => console.log(err));
    };


    const handleJWT = async (email) => {

        await axios.post(jwt, {
            email
        }).then((result) => {
            localStorage.setItem('User-Token', result.data.token);
            // navigate(from, { replace: true });
            navigate('/');
        })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-secondary">
                            Create an Account
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className=" flex items-center mb-4">
                            <div className="title py-3 my-auto px-5 bg-blue-500 text-white text-sm font-semibold mr-3 rounded">Role</div>
                            <div className=''>
                                <label className="flex  p-2 cursor-pointer">
                                    <input
                                        {...register("role", {
                                            required: "role is Required"
                                        })}
                                        className="my-auto transform scale-125" type="radio" name="role" value='seller' />
                                    <div className="title px-2">seller</div>
                                </label>
                            </div>

                            <div> <label className="flex  p-2 cursor-pointer">
                                <input
                                    {...register("role", {
                                        required: "role is Required"
                                    })}
                                    className="my-auto transform scale-125" type="radio" name="role" checked value='buyer' />
                                <div className="title px-2 ">buyer</div>
                            </label></div>


                        </div>

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
                                />
                            </div>
                        </div>
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
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("password", {
                                        required: "password is Required"
                                    })}
                                    type="password"
                                    name="password"
                                    className=" text-lg p-2  border shadow block w-full mt-1 border-gray-300 rounded-md  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        {/* <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Upload a Photo
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("files", {
                                        required: "image is Required"
                                    })}
                                    type="file"
                                    name="email"
                                    className=" text-lg p-2  border shadow block w-full mt-1 border-gray-300 rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div> */}
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 text-white transform font-bold rounded-md focus:outline-none focus:bg-hove-primary bg-primary">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link to='/login' className="text-secondary hover:underline" href="#">
                                Log in
                            </Link>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        <button
                            aria-label="Login with Google"
                            type="button"
                            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                        <button
                            aria-label="Login with GitHub"
                            role="button"
                            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                            <p>Login with GitHub</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;