import React, { useState } from 'react'
import '../Register/Register.css'
import steamlogo from '../../images/R.png'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import loadinglogo from '../../images/download.gif'
import sucesslogo from '../../images/greentick-unscreen.gif'
import 'animate.css';
export default function Register({ saveUserData }) {

    const [isActive, setIsActive] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    function classToggle() {
        setIsActive(current => !current)
    }

    async function SignUp(values) {
        setLoading(true)
        const { data } = await axios.post('https://route-ecommerce-app.vercel.app/api/v1/auth/signup', values).catch((error) => {
            setError(error?.response?.data?.message)
            setLoading(false)
        })
        setLoading(false)
        setSuccess(data?.message)
        if (data?.message === 'success') {
            setTimeout(() => {
                classToggle()
                formikNum1.resetForm()
                setSuccess(false)
                setError(false)
            }, 2000);
        }
    }

    const signUpValidation = Yup.object({
        name: Yup.string().required('Name is Required').min(3, 'Name Minmum Length Must be 3').max(20, 'Name Minmum Length Must be 20'),
        email: Yup.string().required('Email is Required').email('Email Must be Valid'),
        password: Yup.string().required('Password is Required').matches(/^[A-Z][a-z0-9]{5,20}$/, 'Password Must Start with Uppercase'),
        rePassword: Yup.string().required('rePassword is Required').oneOf([Yup.ref('password')], 'Password and rePassword Does not Match'),
        phone: Yup.string().required('Phone is Required').matches(/^01[0125][0-9]{8}$/, 'Phone Must be Egyption Number'),
    })

    async function SignIn(values) {
        setLoading(true)
        const { data } = await axios.post('https://route-ecommerce-app.vercel.app/api/v1/auth/signin', values).catch((error) => {
            setError(error?.response?.data?.message)
            setLoading(false)
        })
        setLoading(false)
        setSuccess(data?.message)
        if (data?.message === 'success') {
            localStorage.setItem('userToken', data?.token)
            setTimeout(() => {
                formikNum1.resetForm()
                setSuccess(false)
                setError(false)
                saveUserData()
                navigate('/')
            }, 2000);
        }
    }
    const signInValidation = Yup.object({
        email: Yup.string().required('Email is Required').email('Email Must be Valid'),
        password: Yup.string().required('Password is Required').matches(/^[A-Z][a-z0-9]{5,20}$/, 'Password Must Start with Uppercase'),
    })



    const formikNum1 = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        },
        validationSchema: signUpValidation,
        onSubmit: SignUp
    })

    const formikNum2 = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: signInValidation,
        onSubmit: SignIn
    })

    return <>
        <section className='steamhard2bg'>
            <div className='body'>
                <div className={isActive ? "move right-panel-active animate__animated  animate__slideInUp" : "move animate__animated  animate__slideInUp"} id="welcome">
                    <div className="form-move sign-up-move">
                        <form onSubmit={formikNum1.handleSubmit}>
                            <h1 className='steamhard2color'>Create Account</h1>
                            <div className="social-move">
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-facebook-f"></i></div>
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-google-plus-g"></i></div>
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-linkedin-in"></i></div>
                            </div>
                            {error ? success ? '' : <div><div className="alert alert-danger">{error}</div></div> : ''}
                            <div>
                                <input className='m-1' onBlur={formikNum1.handleBlur} onChange={formikNum1.handleChange} value={formikNum1.values.name} name='name' id='name' type="text" placeholder="Name" />
                                {formikNum1.errors.name && formikNum1.touched.name ? <div className="alert alert-danger">{formikNum1.errors.name}</div> : null}
                                <input className='m-1' onBlur={formikNum1.handleBlur} onChange={formikNum1.handleChange} value={formikNum1.values.email} name='email' id='email' type="email" placeholder="Email" />
                                {formikNum1.errors.email && formikNum1.touched.email ? <div className="alert alert-danger">{formikNum1.errors.email}</div> : null}
                                <div className='d-flex gap-1 ms-2'>
                                    <div>
                                        <input type="password" onBlur={formikNum1.handleBlur} onChange={formikNum1.handleChange} value={formikNum1.values.password} name='password' id='password' placeholder="Password" />
                                        {formikNum1.errors.password && formikNum1.touched.password ? <div className="alert alert-danger">{formikNum1.errors.password}</div> : null}
                                    </div>
                                    <div>
                                        <input type="password" onBlur={formikNum1.handleBlur} onChange={formikNum1.handleChange} value={formikNum1.values.rePassword} name='rePassword' id='rePassword' placeholder="RePassword" />
                                        {formikNum1.errors.rePassword && formikNum1.touched.rePassword ? <div className="alert alert-danger">{formikNum1.errors.rePassword}</div> : null}
                                    </div>
                                </div>
                                <input className='m-1' onBlur={formikNum1.handleBlur} onChange={formikNum1.handleChange} value={formikNum1.values.phone} name='phone' id='phone' type="tel" placeholder="Phone" />
                                {formikNum1.errors.phone && formikNum1.touched.phone ? <div className="alert alert-danger">{formikNum1.errors.phone}</div> : null}
                            </div>
                            {loading ? <div className='text-center'><img src={loadinglogo} className='loadingwidth' alt="loading" /></div> : success ? <div><img src={sucesslogo} className='w-50' alt="loadinglogo" /></div> : <button className='rounded-pill steambabybg btn btn-info px-5 py-2 mt-1' type='submit' disabled={!(formikNum1.dirty && formikNum1.isValid)}>Sign Up</button>}
                        </form>
                    </div>
                    <div className="form-move sign-in-move">
                        <form onSubmit={formikNum2.handleSubmit}>
                            <h1 className='steamhard2color'>Sign in</h1>
                            <div className="social-move d-flex">
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-facebook-f"></i></div>
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-google-plus-g"></i></div>
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-linkedin-in"></i></div>
                            </div>
                            {error ? success ? '' : <div><div className="alert alert-danger">{error}</div></div> : ''}
                            <input className='m-1' onBlur={formikNum2.handleBlur} onChange={formikNum2.handleChange} value={formikNum2.values.email} name='email' id='email2' type="email" placeholder="Email" />
                            {formikNum2.errors.email && formikNum2.touched.email ? <div className="alert alert-danger">{formikNum2.errors.email}</div> : null}
                            <input type="password" onBlur={formikNum2.handleBlur} onChange={formikNum2.handleChange} value={formikNum2.values.password} name='password' id='password2' placeholder="Password" />
                            {formikNum2.errors.password && formikNum2.touched.password ? <div className="alert alert-danger ">{formikNum2.errors.password}</div> : null}
                            <Link to={'/forgotpassword'} className='steamhard2color text-decoration-none my-3'>Forgot your password?</Link>
                            {loading ? <div className='text-center'><img src={loadinglogo} className='loadingwidth' alt="loading" /></div> : success ? <div><img src={sucesslogo} className='w-50' alt="loadinglogo" /></div> : <button className='rounded-pill steambabybg btn btn-info px-5 py-2 mt-1' type='submit' disabled={!(formikNum2.dirty && formikNum2.isValid)}>Sign in</button>}
                        </form>
                    </div>
                    <div className="overlay-move">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <img src={steamlogo} className='w-25 mb-2' alt="steamlogo" />
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost rounded-pill" id="signIn" onClick={() => { classToggle() }}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <img src={steamlogo} className='w-25 mb-2' alt="steamlogo" />
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost rounded-pill" id="signUp" onClick={() => { classToggle() }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
