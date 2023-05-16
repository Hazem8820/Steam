import React, { useState } from 'react'
import '../Register/Register.css'
import steamlogo from '../../images/R.png'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import loadinglogo from '../../images/download.gif'
import sucesslogo from '../../images/greentick-unscreen.gif'
import 'animate.css';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    function classToggle() {
        setIsActive(current => !current)
    }

    async function forgotPass(values) {
        setLoading(true)
        const { data } = await axios.post('https://route-ecommerce-app.vercel.app/api/v1/auth/forgotPasswords', values).catch((error) => {
            console.log(error);
            setLoading(false)
        })
        setLoading(false)
        setMessage(data?.message)
        setSuccess(data?.statusMsg)
        if (data?.statusMsg === 'success') {
            setTimeout(() => {
                classToggle()
                formikNum1.resetForm()
                setSuccess(false)
                setMessage(false)
            }, 2000);
        }
    }

    async function resetCode(values) {
        setLoading(true)
        const { data } = await axios.post('https://route-ecommerce-app.vercel.app/api/v1/auth/verifyResetCode', { "resetCode": String(values.resetCode) }).catch((error) => {
            setMessage(error?.response?.data?.message)
            setLoading(false)
        })
        setLoading(false)
        setSuccess(data?.status)
        if (data?.status === 'Success') {
            setTimeout(() => {
                formikNum1.resetForm()
                setSuccess(false)
                setMessage(false)
                navigate('/resetPassword')
            }, 2000);
        }
    }

    const emailValidation = Yup.object({
        email: Yup.string().required('Email is Required').email('Email Must be Valid'),
    })

    const codeValidation = Yup.object({
        resetCode: Yup.string().required('Code is Required').matches(/^[0-9]{5,6}$/, 'Code Max Length Must be 6')
    })

    const formikNum1 = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: emailValidation,
        onSubmit: forgotPass
    })

    const formikNum2 = useFormik({
        initialValues: {
            resetCode: '',
        },
        validationSchema: codeValidation,
        onSubmit: resetCode
    })

    return <>
        <section className='steamhard2bg'>
            <div className='body'>
                <div className={isActive ? "move right-panel-active animate__animated  animate__slideInDown" : "move animate__animated  animate__slideInDown"} id="welcome">
                    <div className="form-move sign-up-move">
                        <form onSubmit={formikNum2.handleSubmit}>
                            <h1 className='steamhard2color'>Enter Your Code</h1>
                            {message ? <div><div className='alert alert-danger'>{message}</div></div> : ''}
                            <div>
                                <input className='m-1' onBlur={formikNum2.handleBlur} onChange={formikNum2.handleChange} value={formikNum2.values.resetCode} id='resetCode' name='resetCode' type="text" placeholder="Code" />
                                {formikNum2.errors.resetCode && formikNum2.touched.resetCode ? <div className="alert alert-danger">{formikNum2.errors.resetCode}</div> : null}
                            </div>
                            {loading ? <div className='text-center'><img src={loadinglogo} className='loadingwidth' alt="loading" /></div> : success == 'Success' ? <div><img src={sucesslogo} className='w-50' alt="loadinglogo" /></div> : <button type='submit' className='rounded-pill mt-1 steambabybg btn btn-info px-5 py-2' disabled={!(formikNum2.dirty && formikNum2.isValid)}>Submit</button>}
                        </form>
                    </div>
                    <div className="form-move sign-in-move">
                        <form onSubmit={formikNum1.handleSubmit}>
                            <h1 className='steamhard2color'>Forgot Password?</h1>
                            {message ? <div><div className='alert alert-success'>{message}</div></div> : ''}
                            <input onBlur={formikNum1.handleBlur} onChange={formikNum1.handleChange} value={formikNum1.values.email} name='email' id='email' className='m-1' type="email" placeholder="Email" />
                            {formikNum1.errors.email && formikNum1.touched.email ? <div className="alert alert-danger">{formikNum1.errors.email}</div> : null}
                            {loading ? <div className='text-center'><img src={loadinglogo} className='loadingwidth' alt="loading" /></div> : success == 'success' ? <div><img src={sucesslogo} className='w-50' alt="loadinglogo" /></div> : <button type='submit' className='rounded-pill mt-1 steambabybg btn btn-info px-5 py-2' disabled={!(formikNum1.dirty && formikNum1.isValid)}>Send</button>}
                        </form>
                    </div>
                    <div className="overlay-move">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <img src={steamlogo} className='w-100 mb-2' alt="steamlogo" />
                            </div>
                            <div className="overlay-panel overlay-right">
                                <img src={steamlogo} className='w-100 mb-2' alt="steamlogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
