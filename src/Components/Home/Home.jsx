import React, { useContext, useEffect, useState } from 'react'
import '../Home/home.css'
import { dataContext } from '../../Context.js/Context'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import HomeSlider from '../HomeSlider/HomeSlider';

export default function Home() {
    const [games, setGames] = useState([])
    const [loading, isLoading] = useState(false)
    const { getGames } = useContext(dataContext)

    async function getData() {
        isLoading(true)
        const data = await getGames()
        setGames(data?.data)
        isLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        {loading ? <Loading /> : <>
            <HomeSlider />
            <section className='sectionbg'>
                <div className="container">
                    <div className="row">
                        {games?.map((el, index) => {
                            return <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <Link to={`/GameDetails/${el.id}`} className='text-decoration-none'>
                                    <div>
                                        <div className="card-container mx-auto shadow-lg my-3">
                                            <h2 className='fs-6'>{el.title}</h2>
                                            <div className="a hero-image-container">
                                                <img className="size hero-image shadow" src={el.thumbnail} alt="gameimage" />
                                            </div>
                                            <main className="main-content">
                                                <p className='p'>{el.short_description.split('').slice(0, 40).join('')}</p>
                                            </main>
                                            <div className="card-attribute">
                                                <p className='p'>
                                                    Category: <span className='span'>{el.genre}</span>
                                                </p>
                                                <p className='p'>
                                                    Owner of game: <span className='span'>{el.developer.split(' ').slice(0, 1).join(' ')}</span>
                                                </p>
                                                <p className='p'>
                                                    For: <span className='span'>{el.platform}</span>
                                                </p>
                                                <p className='p'>
                                                    Release Date: <span className='span'>{el.release_date}</span>
                                                </p>
                                                {localStorage.getItem('userToken') == null ? '' : <div className='w-75 mx-auto'>
                                                    <Link className='text-decoration-none' target='_blank' to={el.game_url}><button className='w-100 steambabybg btn'><i className="fa-solid fa-download"></i> Download</button></Link>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </section >
            <HomeSlider />
        </>}
    </>
}
