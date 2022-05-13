import React, { useEffect, useState } from 'react'
import axios from './Axios';
import requests from './Requests';
import './banner.css'

function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)

                ]
            )
            return request;
        }

        fetchData();

    }, [])

    function truncate_desc(str, chars){
        return str?.length > chars ? str.substr(0, chars-1) + "...": str;
    }

    return(
        <div>
            <header  className='banner' style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}>
                <div className='banner_content'>
                    <h1 className='banner_title'>
                        {movie.title || movie.original_name || movie.name}
                    </h1>
                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>
                    <h1 className='banner_description'>
                        {truncate_desc(movie.overview, 100)}
                    </h1>
                </div>
                <div className='bottom_fade'>

                </div>
            </header>
        </div>
    )
}

export default Banner