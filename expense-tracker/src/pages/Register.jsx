// import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../assets/Image.png'; 

const Register = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must be no more than 20 characters long'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post("http://localhost:5000/api/users/register", values)
                .then((response) => {
                    console.log(response);
                    if (response.data.msg === 'User registered successfully') {
                        toast.success('User registered successfully!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        setTimeout(() => {
                            navigate('/login');
                        }, 5000);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Error registering user!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
        },
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="-top-32 -left-32 -right-32 w-50 h-full hidden md:block bg-red-200 rounded-full absolute transform rotate-45"></div>
            <div className="flex absolute flex-col items-center bg-gray-200 p-10 z-10 rounded-md md:w-1/3">
                <h2 className="text-5xl font-bold mb-8">The Oracle.</h2>
                <form onSubmit={formik.handleSubmit} className="w-full">
                    <div className="w-100 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
                            id="firstName"
                            type="text"
                            placeholder="Victor..."
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p>
                        ) : null}
                    </div>
                    <div className="w-100 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''}`}
                            id="lastName"
                            type="text"
                            placeholder="Oluwapelumi..."
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p>
                        ) : null}
                    </div>
                    <div className="w-100 mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                            id="email"
                            type="email"
                            placeholder="username@theoracle"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                        ) : null}
                    </div>
                    <div className="w-100 mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                            id="password"
                            type="password"
                            placeholder="*******************"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                        ) : null}
                    </div>
                    <div className="w-100 flex flex-col space-y-4">
                        <button
                            className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            disabled={!formik.isValid || formik.isSubmitting}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <div className="absolute bottom-0 right-200 hidden md:block w-50 h-50">
                <img src={image1} alt="" className="h-full md:left-[600px] -top-7 relative object-cover" />
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Register;
