
import React from "react";

import styles from "./Components/App.module.css";
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
 
<BrowserRouter>
<Link to="/">
<h1 className={styles.title}>Movies</h1>
</Link>

<Routes>
<Route exact path="/" element={
 <div >
 
 <LandingPage/>
 

</div>
}           />
<Route exact path="/movies/:movieId" element={
 <div >
<MovieDetails/>
</div>
}           />
       

</Routes>



</BrowserRouter>
















    // <div >
    //   <header>
    //   <h1 className={styles.title}>Movies</h1>
    //   </header>
    //   <main>
       
    //  <MoviesGrid/> 

    //   </main>
     
    // </div>
  );
}

export default App;
