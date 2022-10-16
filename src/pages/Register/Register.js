import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../Firebase'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../Firebase'

export default function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmpassword: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Required").matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"),
            password: yup.string().required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Please enter a password with minimum eight characters, at least one letter and one number"),
            confirmpassword: yup.string().required("Reiquired").oneOf([yup.ref("password"), null], "Password must match")
        }),
        onSubmit: async (value) => {
            try {
                await createUserWithEmailAndPassword(auth, value.email, value.password);
                setDoc(doc(db, 'user', value.email), {
                    savedMovie: []
                })
                navigate("/")
            } catch (error) {
                setError(error.message)
            }
        }
    })
    return (

        <>
            <div className='h-full w-full bg-cover py-24 relative' style={{ backgroundImage: "linear-gradient(180deg,transparent 0,#000),url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)" }} >

                <div className='max-w-[450px] min-h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='px-[30px] pt-[30px] pb-[20px] md:pt-[60px] md:pb-[40px] md:px-[68px]'>
                        <h1 className='font-bold text-3xl '>Sing up</h1>
                        <form className='flex flex-col w-full py-4' onSubmit={formik.handleSubmit}>
                            <div className='my-2'>
                                <input
                                    className='p-3 bg-gray-700 rounded-md w-full'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                />
                                {formik.errors.email && (
                                    <p className='text-red-600 mt-1'>{formik.errors.email}</p>
                                )}
                            </div>
                            <div className='my-2'>
                                <input
                                    //   onChange={(e) => setEmail(e.target.value)}
                                    className='p-3  bg-gray-700 rounded-md w-full'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    id='password'
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                />
                                {formik.errors.password && (
                                    <p className='text-red-600 mt-1 text-xs'>{formik.errors.password}</p>
                                )}
                            </div>
                            <div className='my-2'>
                                <input
                                    //   onChange={(e) => setEmail(e.target.value)}
                                    className='p-3  bg-gray-700 rounded-md w-full'
                                    value={formik.values.confirmpassword}
                                    onChange={formik.handleChange}
                                    id='confirmpassword'
                                    name='confirmpassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                {formik.errors.confirmpassword && (
                                    <p className='text-red-600 mt-1 text-xs'>{formik.errors.confirmpassword}</p>
                                )}
                            </div>
                            {error ? <p className="">{error}</p> : null}
                            <button type='submit'
                                className='bg-[#e50914] rounded-md p-3 my-2 shadow-3xl'>
                                Sing up
                            </button>

                        </form>
                        <div className='flex justify-end items-center text-sm text-[#b3b3b3]'>
                            <p>Need Help?</p>
                        </div>
                        <div className='pt-[95px]'>
                            <span className='text-[#b3b3b3] pr-2'>Already subscribed to Netflix ?</span>
                            <Link to={'/login'}>Sign in now.</Link>
                        </div>
                        <div className='pt-2'>
                            <span className='text-[#b3b3b3] pr-[2px] text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                            <Link className='text-[#0071eb] text-xs'>Learn more.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
