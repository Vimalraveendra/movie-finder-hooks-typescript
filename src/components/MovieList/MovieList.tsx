import MovieDisplay from "../MovieDisplay/MovieDisplay"

import "./MovieList.css"

import { IMovie } from "../../containers/App"


const MovieList = ({moviesList}:{moviesList:Array<IMovie>})=>{ 
    return(
        <div className="movieList-container">
          {
             moviesList.length>0&& moviesList.map(movie=>{
                return <MovieDisplay 
                key={movie.imdbID}
                imdbID={movie.imdbID}
                Poster={movie.Poster}
                Title ={movie.Title}
                Year ={movie.Year}
               
               />
            }) 
          }
        </div>
    )
}

export default MovieList