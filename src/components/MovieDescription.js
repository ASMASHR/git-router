import React from 'react'
import {useParams} from 'react-router-dom'
import {myLists} from './MovieList'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'

import './style.css'
function MovieDescription({movies}) {
   const {id}=useParams()
   const movie = movies.find((el) =>  el.id == id)
    return (
        <div className="descPage" >
            <Link to="/" >
                <form>
                    <button >Home</button>
                </form>
            </Link>
            <div className="FilmDesc">
            <div className="DescContent" >
                <img className="FilmDescImg" src={movie.filmimage}  />
                <div  className="InformationsColumn">
                    <h1>{movie.filmName}</h1>
                    <div className="rate-Type">
                        <ReactStars count={5} value={movie.value} edit={false} size={40} isHalf={true} activeColor="#ffd700" />
                        <h5>{movie.filmType}</h5>
                    </div>
                    <div className="Overview-Div">
                        <h3>Overview</h3>
                        <p>{movie.filmoverview}</p>
                    </div>
                    <div className="Director-Writer"style={{display:"flex"}}>
                        <h3>Director:</h3>
                        <h3>Writer:</h3>
                    </div>
                    <div  className="Director-Writer-Names">
                        <h4>{movie.filmWriter}</h4>
                        <h4>{movie.filmDirector}</h4>
                    </div>
                </div>
            </div>
            <div className="trailer-Div">
                <h3 >Trailer</h3>
                <iframe src={movie.filmTrailer} title='video'/>
            </div>
        </div>
        </div>
        )}

export default MovieDescription
