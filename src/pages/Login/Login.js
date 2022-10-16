import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
export default function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (value) => {
            try {
                await signInWithEmailAndPassword(auth, value.email, value.password)
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
                        <h1 className='font-bold text-3xl '>Sing in</h1>
                        {error ? <p className='text-red-600 mt-4'>{error}</p> : null}
                        <form className='flex flex-col w-full py-4' onSubmit={formik.handleSubmit}>
                            <div className='my-2'>
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    id="email"
                                    name="email"
                                    className='p-3 bg-gray-700 rounded-md w-full'
                                    type='email'
                                    placeholder='Email'
                                />
                            </div>
                            <div className='my-2'>
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    id="password"
                                    name="password"
                                    className='p-3  bg-gray-700 rounded-md w-full'
                                    type='password'
                                    placeholder='Password'
                                />
                            </div>
                            <button className='bg-[#e50914] rounded-md p-3 my-2 shadow-3xl' type="submit">
                                Login
                            </button>

                        </form>
                        <div className='flex justify-between items-center text-sm text-[#b3b3b3]'>
                            <p>
                                <input className='mr-2' type='checkbox' />
                                Remember me
                            </p>
                            <p>Need Help?</p>
                        </div>
                        <div className='pt-[95px]'>
                            <span className='text-[#b3b3b3] pr-2'>New to Netflix?</span>
                            <Link to={'/register'}>Sign up now.</Link>
                        </div>
                        <div className='pt-2'>
                            <span className='text-[#b3b3b3] pr-[2px] text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                            <Link className='text-[#0071eb] text-xs'>Learn more.</Link>
                        </div>
                        {/* <div className='bg-black/50 w-full h-screen fixed top-0 left-0 z-[5]'></div> */}

                    </div>
                </div>

            </div>
        </>

    )
}
