import React, { useEffect, useState } from "react";
import axios from "./Axios";
import './row.css'

function Row(props){
    const [movies, setMovies] = useState([]);
    const img_base_url = "https://image.tmdb.org/t/p/original/"
    //a snippet of code which runs on a specific condition or variable, 
    //when a condition is met
    useEffect(() => {
        // if[] is empty, run once on page load and dont run it again
        //async means out of order
        async function fetchData(){
            const request = await axios.get(props.fetchUrl); 
            
            setMovies(request.data.results)
            
            return request;
        }
        fetchData();
    }, [props.fetchUrl])

    return(
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map(movie => (
                        <img 
                            key = {movie.id}
                            className={`row_poster ${props.LargerImages && 'row_poster_large'}`} 
                            src={`${img_base_url}${movie.poster_path}`}
                            alt={movie.name} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Row