import React, { useContext, useEffect, useState } from 'react'
import '../HomeSlider/slider.css'
import { dataContext } from '../../Context.js/Context'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
export default function HomeSlider() {

    const [games, setGames] = useState([])
    const { getGames } = useContext(dataContext)

    async function getData() {
        const data = await getGames()
        setGames(data?.data)
    }

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        arrows: true,
    };

    useEffect(() => {
        getData()
    }, [])


    return <>
        <section className='shadow sectionbg'>
            <div className='container rounded-4'>
                <Slider {...settings}>
                    {games.map((el, index) => {
                        return <Link className='text-decoration-none' to={`gamedetails/${el.id}`} key={index}>
                            <div className='pt-2'>
                                <div className="a hero-image-container mx-2">
                                    <img src={el.thumbnail} className='w-100 rounded-4' height={200} alt="" />
                                </div>
                                <h6 className='text-center steamlightcolor'>{el.title.split(' ').slice(0, 2).join(' ')}</h6>
                            </div>
                        </Link>
                    })}
                </Slider>
            </div>
        </section>
    </>
}
