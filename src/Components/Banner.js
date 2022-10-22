import React from 'react';
import { useState, useEffect } from 'react';
import '../Components/Banner.css'
import axios from '../ultil/axios'
import requests from '../ultil/request';

function Banner() {

    const [movie, setMovies] = useState([])

    const fetchData = async () => {
        debugger
        const res = await axios.get(requests.fetchNetflixOriginals)
        if(res) {
            setMovies(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
        }
    }

    useEffect(()=> {
        fetchData()
    },[])
     
console.log(movie)
    const truncated = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url(https://media.istockphoto.com/photos/wall-black-background-for-design-stone-black-texture-background-picture-id1320815200?b=1&k=20&m=1320815200&s=612x612&w=0&h=yUGA6XiZ0zWU9lw5q3cm3ZHhiBd-Aqvx-HZClDjJo0o=)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncated('This is Description This is Description This is Description This is Description This is DescriptionThis is DescriptionThis is DescriptionThis is DescriptionThis is DescriptionThis is DescriptionThis is DescriptionThis is DescriptionThis is Description', 100)}</h1>
            </div>

            <div className='banner__fadeBottom' />
        </header>
    );
}

export default Banner;
