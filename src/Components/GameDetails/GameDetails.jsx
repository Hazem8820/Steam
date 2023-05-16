import React, { useContext, useEffect, useState } from 'react'
import '../Home/home.css'
import { dataContext } from '../../Context.js/Context'
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import '../GameDetails/game.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function GameDetails() {

    const { id } = useParams()
    const [games, setGames] = useState([])
    const [loading, isLoading] = useState(false)
    const { gamesDetails } = useContext(dataContext)

    async function getData(id) {
        isLoading(true)
        const data = await gamesDetails(id)
        setGames(data?.data)
        isLoading(false)
    }

    useEffect(() => {
        getData(id)
    }, [])

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        arrows: true,
    };


    return <>
        {loading ? <Loading /> : <section>
            <div className='sectionbg details py-5'>
                <figure className="movie">
                    <div className="movie__hero">
                        <img src={games?.thumbnail} alt="gamelogo" className="movie__img" />
                    </div>
                    <div className="movie__content">
                        <div className="movie__title">
                            <h2 className="heading__primary fs-1">{games?.title} <i className="fas fa-fire"></i></h2>
                        </div>
                        <div className='w-25 me-auto d-flex mb-3'>
                            <div className="movie__tag movie__tag--1">#{games?.genre}</div>
                            <div className="movie__tag movie__tag--2">#{games?.platform}</div>
                            <div className="movie__tag movie__tag--1">#{games?.status}</div>
                        </div>
                        <p className="movie__description">
                            {games?.description?.split(' ').slice(0, 30).join(' ')}
                        </p>
                        <div>
                            <p className="movie__description">
                                <span className='steamnormalcolor'>Owner: </span>{games?.developer}
                            </p>
                            <p className="movie__description">
                                <span className='steamnormalcolor'>Publisher: </span> {games?.publisher}
                            </p>
                            <p className="movie__description">
                                <span className='steamnormalcolor'>minimum System Requirements: </span> <span className='d-block'>{games?.minimum_system_requirements?.os}</span>
                                <span className='d-block'>{games?.minimum_system_requirements?.graphics}</span>
                                <span className='d-block'>{games?.minimum_system_requirements?.memory}</span>
                                <span className='d-block'>{games?.minimum_system_requirements?.processor}</span>
                                <span className='d-block'>{games?.minimum_system_requirements?.storage}</span>
                            </p>
                        </div>
                        <Link className='text-decoration-none' target='_blank' to={games?.game_url}><button className='w-100 steambabybg btn'><i className="fa-solid fa-download"></i> Download</button></Link>
                    </div>
                    <div className="movie__price p-5">Released: {games?.release_date}</div>
                </figure>
            </div>
            <div className='sectionbg'>
                <div className='container rounded-4'>
                    <Slider {...settings}>
                        {games?.screenshots?.map((el, index) => {
                            return <div key={index} className='pt-2'>
                                <div className=".a hero-image-container mx-2">
                                    <img src={el.image} className='w-100 rounded-4' height={200} alt="" />
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </section>}
    </>
}
