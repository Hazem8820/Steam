import React from 'react'
import navlogo from '../../images/logo_steam.svg'
import { Link } from 'react-router-dom'
export default function Navbar({ userData, logOut }) {
    return <>
        <div className='steamnavgif'>
            <nav className="navbar steamnavbg shadow navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand"><img src={navlogo} className='w-75' alt="navlogo" /></Link>
                    <button className="navbar-toggler steamlightcolor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {userData !== null ? <>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-">
                                <li className="nav-item mx-1">
                                    <Link className="nav-link active steamlightcolor babyhover" aria-current="page" to={'/'}> <span className='fs-5 steamlightcolor'><i className="fa-solid fa-house"></i></span> Home</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link active steamlightcolor babyhover" aria-current="page" to={'/about'}><span className='fs-5 steamlightcolor'><i className="fa-brands fa-steam"></i></span> About</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link className="nav-link active steamlightcolor babyhover" aria-current="page" to={'/Support'}><span className='fs-5 steamlightcolor'><i className="fa-brands fa-teamspeak"></i></span> Support</Link>
                                </li>
                                <li className="nav-item dropdown mx-1">
                                    <Link className="nav-link dropdown-toggle steamlightcolor babyhover" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='fs-5 me-2 steamlightcolor'><i className="fa-brands fa-steam-symbol"></i></span>Games Categories</Link>
                                    <ul className="dropdown-menu steamhard2bg">
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/3d'}>3D</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/mmorpg'}>MMORPG</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/pvp'}>PvP</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/fantasy'}>Fantasy</Link></li>
                                        <li><hr className="dropdown-divider steamlightbg" /></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/strategy'}>Strategy Games</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/shooter'}>Shooter Games</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/fighting'}>Fighting Games</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/MOBA'}>Moba Games</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/MMO'}>MMO Games</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/sports'}>Sports Games</Link></li>
                                        <li><Link className="dropdown-item steambabycolor" to={'/filtergames/racing'}>Racing Games</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </> : <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-">
                            <li className="nav-item mx-1">
                                <Link className="nav-link active steamlightcolor babyhover" aria-current="page" to={'/'}><span className='fs-5 steamlightcolor'><i className="fa-solid fa-house"></i></span> Home</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active steamlightcolor babyhover" aria-current="page" to={'/about'}><span className='fs-5 steamlightcolor'><i className="fa-brands fa-steam"></i></span> About</Link>
                            </li>
                        </ul>}
                        {userData !== null ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={() => { logOut() }} className="nav-link steamlightcolor babyhover d-flex" aria-current="page"> <span className='steamlightcolor mx-1 fs-6'><i className="fa-solid fa-arrow-right-from-bracket"></i></span> Logout</Link>
                            </li>
                        </ul> : <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link steamlightcolor babyhover d-flex" aria-current="page" to={'register'}> <span className='steamlightcolor mx-1 fs-6'><i className="fa-solid fa-pen-to-square"></i></span>Join<span className='fs-6 ms-1'>Us</span></Link>
                            </li>
                        </ul>}
                    </div>
                </div>
            </nav>
        </div>
    </>
}
