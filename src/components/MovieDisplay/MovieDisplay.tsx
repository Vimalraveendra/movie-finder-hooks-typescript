
import "./MovieDisplay.css";
import { IMovie } from "../../containers/App";





const MovieDisplay = ({Poster, Title,Year}:IMovie)=>{ 
    
    return(
       (Poster!=='N/A')?
        <div className="movie-container">
         <img src={Poster} alt={Title} />
         <h2>{Title}</h2>
         <p>{Year} </p>
        </div>:null
    )
    }  
   
      



export default MovieDisplay;        