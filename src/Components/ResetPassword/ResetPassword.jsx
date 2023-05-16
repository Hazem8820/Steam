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
export default function ResetPassword() {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function SignIn(values) {
        setLoading(true)
        const { data } = await axios.put('https://route-ecommerce-app.vercel.app/api/v1/auth/resetPassword', values).catch((error) => {
            setError(error?.response?.data?.message)
            setLoading(false)
        })
        setLoading(false)
        setSuccess(data?.token)
        if (data?.token) {
            setTimeout(() => {
                formikNum2.resetForm()
                setSuccess(false)
                setError(false)
                navigate('/register')
            }, 2000);
        }
    }
    const signInValidation = Yup.object({
        email: Yup.string().required('Email is Required').email('Email Must be Valid'),
        newPassword: Yup.string().required('Password is Required').matches(/^[A-Z][a-z0-9]{5,20}$/, 'Password Must Start with Uppercase'),
    })

    const formikNum2 = useFormik({
        initialValues: {
            email: '',
            newPassword: '',
        },
        validationSchema: signInValidation,
        onSubmit: SignIn
    })

    return <>
        <section className='steamhard2bg'>
            <div className='body'>
                <div className="move animate__animated  animate__slideInUp" id="welcome">
                    <div className="form-move sign-in-move">
                        <form onSubmit={formikNum2.handleSubmit}>
                            <h1 className='steamhard2color'>Reset Password</h1>
                            <div className="social-move">
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-facebook-f"></i></div>
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-google-plus-g"></i></div>
                                <div className="a social text-decoration-none steambabycolor"><i className="fab fa-linkedin-in"></i></div>
                            </div>
                            {error ? success ? '' : <div><div className="alert alert-danger">{error}</div></div> : ''}
                            <input className='m-1' onBlur={formikNum2.handleBlur} onChange={formikNum2.handleChange} value={formikNum2.values.email} name='email' id='email2' type="email" placeholder="Email" />
                            {formikNum2.errors.email && formikNum2.touched.email ? <div className="alert alert-danger">{formikNum2.errors.email}</div> : null}
                            <input type="password" onBlur={formikNum2.handleBlur} onChange={formikNum2.handleChange} value={formikNum2.values.newPassword} name='newPassword' id='newPassword' placeholder="New Password" />
                            {formikNum2.errors.password && formikNum2.touched.password ? <div className="alert alert-danger ">{formikNum2.errors.password}</div> : null}
                            {loading ? <div className='text-center'><img src={loadinglogo} className='loadingwidth' alt="loading" /></div> : success ? <div><img src={sucesslogo} className='w-50' alt="loadinglogo" /></div> : <button className='rounded-pill steambabybg btn btn-info px-5 py-2 mt-1' type='submit' disabled={!(formikNum2.dirty && formikNum2.isValid)}>Sign in</button>}
                        </form>
                    </div>
                    <div className="overlay-move">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <img src={steamlogo} className='w-25 mb-2' alt="steamlogo" />
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details to Reset your Password</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>
}
