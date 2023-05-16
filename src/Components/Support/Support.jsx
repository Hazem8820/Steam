import React from 'react'
import '../Support/Support.css'
import { useState } from 'react';
import 'animate.css';
export default function Support() {

    const [isActive, setIsActive] = useState(false);

    function addClass() {
        setIsActive(current => !current)
    }

    return <>
        <section className='sectionbg'>
            <div className={isActive ? 'body sectionbg sent' : 'body sectionbg'}>
                <div className="wrapper animate__animated animate__zoomIn centered">
                    <article className="letter">
                        <div className="side">
                            <h1>Contact us <span className='fs-2 steamnormalcolor'><i className="fa-brands fa-steam"></i></span></h1>
                            <p>
                                <textarea className='textarea' placeholder="Your message"></textarea>
                            </p>
                        </div>
                        <div className="side">
                            <div className='d-flex'>
                                <p>
                                    <input className='input w-75' type="text" placeholder="Your name" />
                                </p>
                                <p>
                                    <input className='input w-75' type="email" placeholder="Your email" />
                                </p>
                            </div>
                            <p>
                                <button onClick={() => { addClass() }} className='button' id="sendLetter">Send</button>
                            </p>
                        </div>
                    </article>
                    <div className="envelope front"></div>
                    <div className="envelope back"></div>
                </div>
                <p className={isActive ? 'steamlightcolor fs-5': 'steamlightcolor d-none fs-5'}>Thank you for your message <span className='text-danger fs-5'><i className="fa-solid fa-heart"></i></span></p>
            </div>
        </section>
    </>
}
