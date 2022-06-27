import React, { useEffect, useState } from 'react'
import styles from "./MovieDetails.module.css" ;
import {useParams} from "react-router" ;
import {get} from "../utils/httpClient";
import Spinner from '../Components/Spinner';
import placeholder from  "../placeholder.jpg" ;

const MovieDetails = () => {
  const {movieId} = useParams();
  const [isLoading , SetIsLoading] = useState(true);
  const [movie,setmovie]=useState(null);

  

  useEffect(() =>{
    SetIsLoading(true);

    get("/movie/" + movieId) .then((data) =>{
     setmovie(data);
     SetIsLoading(false);
    });
  },[movieId]);

if (isLoading) {
  return <div><Spinner/></div>
}
  if(!movie) {
    return null ;
  }

  const imageUrl =movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
  return (
    <div className={styles.details}>
    <img className={`${styles.col}  ${styles.movieImage}` } src ={imageUrl} alt={movie.title} />
    
    <div className={`${styles.col}  ${styles.movieDetails}` }>
      <p className={styles.firstItem}>
        <strong>Title:</strong> {movie.title}
        </p>
      <p>
        {movie.genres.map(genre =>genre.name).join(", ")}
        </p>
      <p>
        <strong>Description:</strong>{movie.overview}
        </p>
    </div>
 <p></p>
 </div>
  )


}

export default MovieDetails