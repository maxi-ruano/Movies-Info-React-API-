import React, { useEffect , useState } from 'react'

import { useQuery } from '../Hooks/useQuery';
import {get} from "../utils/httpClient";
import Empty from './Empty';
import MovieCard from './MovieCard';
import styles from "./MoviesGrid.module.css" ;
import Spinner from './Spinner';



const MoviesGrid = () => {
  
  const [movies,setMovies] = useState([]);
  const [isLoading, SetIsLoading] =useState(true)
 
  const query = useQuery();
  const search=query.get("search");
  console.log(search);
  // const location =useLocation();
  // console.log(location.search);

  useEffect(()=>{
    SetIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search :"/discover/movie";
   get (searchUrl).then ((data) =>{
     setMovies(data.results);
     SetIsLoading(false) ;
      });

    
  },[search]);


  if(isLoading){
    return <Spinner/>;
  }
    if (movies.length ===0){
      return <Empty/>
    }
  return (
   <ul className={styles.moviesGrid}>
       {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
       ) )}
   </ul>
  )
}

export default MoviesGrid