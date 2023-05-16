import React from 'react'
import footerlogo from '../../images/R.png'
import { Link } from 'react-router-dom';

export default function Footer({ userData }) {
    return <>
        {userData !== null ? '' : <div className='bg-black shadow-lg'>
            <div className="container">
                <div className='text-center py-1'>
                    <p className='steambabycolor my-2 fa-2x'>Looking for recommendations?</p>
                    <p className='steamlightcolor my-1'>Sign in to view personalized recommendations</p>
                    <Link to={'/register'}>
                        <button className='btn btn-success my-1'>Sign in</button>
                    </Link>
                    <p className='steamlightcolor my-1'>Or <span className='text-white'>Sign up</span> and join Steam for free</p>
                </div>
            </div>
        </div>}
        <div className='steamhardbg shadow-lg'>
            <div className="container">
                <div className="row">
                    <div className='w-100 line steamlightbg mt-2'></div>
                    <div className="col-sm-2 text-center"><img src="https://store.cloudflare.steamstatic.com/public/images/footerLogo_valve_new.png" className='w-100 mt-4' alt="valve logo" /></div>
                    <div className="col-sm-8 steamlightcolor py-2">
                        <p>
                            © 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                            VAT included in all prices where applicable.   Privacy Policy   |   Legal   |   Steam Subscriber Agreement   |   Refunds   |   Cookies.
                        </p>
                    </div>
                    <div className="col-sm-2 text-center"><img src={footerlogo} className='w-50 my-2' alt="steam logo" /></div>
                    <div className='w-100 line steamlightbg mt-2'></div>
                    <div className='my-2'><p className='text-center steamlightcolor'>About Valve   |  Jobs   |  Steamworks   |  Steam Distribution   |  <span className='text-success'><i className="fa-solid fa-headset"></i></span> Support   | <span className='text-danger'><i className="fa-solid fa-gift"></i></span> Gift Cards   |  <span className='text-primary'><i className="fa-brands fa-facebook"></i></span> Steam   |   <span className='text-info'><i className="fa-brands fa-twitter"></i></span> Steam.</p></div>
                </div>
            </div>
        </div>
    </>
}
