import React from 'react'
import styles from "./MovieCard.module.css";
import {Link} from "react-router-dom";
import placeholder from  "../placeholder.jpg" ;


const MovieCard = ({movie}) => {
    const imageUrl =movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img className={styles.movieImage} src ={imageUrl} alt={movie.title} width={230} height={345}/>
        <div>{movie.title}</div>
        </Link>
        </li>
  )
}

export default MovieCard