import React from 'react'
import '../About/About.css'
import 'animate.css';
export default function About() {


    return <>
        <section className='steamhardbg'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-sm-12 d-flex align-items-center col-md-6">
                        <div className='animate__animated animate__zoomInLeft'>
                            <h2 className='steamlightcolor fa-3x'>Join the Community</h2>
                            <div><span className='steamlightcolor fs-2'>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends or enemies, the fun never stops.</span></div>
                            <span className='steambabycolor mt-2 fs-3'>Visit the Community <i className="fa-solid fa-arrow-right"></i> </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className='animate__animated animate__zoomInRight'>
                            <img className="w-100" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_community.png" />
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-sm-12 col-md-6">
                        <div className='animate__animated animate__zoomInLeft animate__delay-1s'>
                            <img className="w-100" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_hardware.png" />
                        </div>
                    </div>
                    <div className="col-sm-12 d-flex align-items-center col-md-6">
                        <div className='animate__animated animate__zoomInRight animate__delay-1s'>
                            <h2 className='steamlightcolor fa-3x'>Experience Steam Hardware</h2>
                            <div><span className='steamlightcolor fs-2'>We created the Steam Deck and the Valve Index headset to make gaming on the PC even better.</span></div>
                            <span className='steambabycolor mt-2 fs-3'>Experience Steam Hardware <i className="fa-solid fa-arrow-right"></i> </span>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-sm-12 d-flex align-items-center col-md-6">
                        <div className='animate__animated animate__zoomInLeft animate__delay-2s'>
                            <h2 className='steamlightcolor fa-3x'>Release your Game</h2>
                            <div><span className='steamlightcolor fs-2'>Steamworks is the set of tools and services that help game developers and publishers get the most out of distributing games on Steam.</span></div>
                            <span className='steambabycolor mt-2 fs-3'>Learn about Steamworks  <i className="fa-solid fa-arrow-right"></i> </span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className='animate__animated animate__zoomInRight animate__delay-2s'>
                            <img className="w-100" src="https://cdn.cloudflare.steamstatic.com/store/about/cta_hero_steamworks.png" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center my-5 py-5 animate__animated animate__zoomIn animate__delay-3s">
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <div className='divo rounded-4 py-1 animate__bounceInLeft'>
                            <div className='text-center translate-middle-y'><span className='spano fs-1 rounded-circle p-4 bg-dark steamlightcolor'><i className="fa-regular fa-comments"></i></span></div>
                            <div className='minidivo rounded-3 text-center mx-auto steamlightcolor'>
                                <h3>Steam Chat</h3>
                                <p className='px-5 '>
                                    Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <div className='divo rounded-4 py-1'>
                            <div className='text-center translate-middle-y'><span className='spano fs-1 rounded-circle p-4 bg-dark steamlightcolor'><i className="fa-solid fa-people-group"></i></span></div>
                            <div className='minidivo rounded-3 text-center mx-auto steamlightcolor'>
                                <h3>Games Hubs</h3>
                                <p className='px-5 '>
                                    Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <div className='divo rounded-4 py-1'>
                            <div className='text-center translate-middle-y'><span className='spano fs-1 rounded-circle p-4 bg-dark steamlightcolor'><i className="fa-solid fa-desktop"></i></span></div>
                            <div className='minidivo rounded-3 text-center mx-auto steamlightcolor'>
                                <h3>Steam Broadcast</h3>
                                <p className='px-5 '>
                                    Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5 animate__animated animate__zoomIn animate__delay-3s">
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <div className='divo rounded-4 py-1'>
                            <div className='text-center translate-middle-y'><span className='spano fs-1 rounded-circle p-4 bg-dark steamlightcolor'><i className="fa-solid fa-diagram-project"></i></span></div>
                            <div className='minidivo rounded-3 text-center mx-auto steamlightcolor'>
                                <h3>Steam Workshop</h3>
                                <p className='px-5 '>
                                    Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <div className='divo rounded-4 py-1'>
                            <div className='text-center translate-middle-y'><span className='spano fs-1 rounded-circle p-4 bg-dark steamlightcolor'><i className="fa-solid fa-gamepad"></i></span></div>
                            <div className='minidivo rounded-3 text-center mx-auto steamlightcolor'>
                                <h3>Controller Support</h3>
                                <p className='px-5 '>
                                    Steam encourages developers to include controller support in their games including PlayStation, Xbox, and Nintendo controllers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                        <div className='divo rounded-4 py-1'>
                            <div className='text-center translate-middle-y'><span className='spano fs-1 rounded-circle p-4 bg-dark steamlightcolor'><i className="fa-regular fa-credit-card"></i></span></div>
                            <div className='minidivo rounded-3 text-center mx-auto steamlightcolor'>
                                <h3>Purchases Made Easy</h3>
                                <p className='px-5 '>
                                    Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
