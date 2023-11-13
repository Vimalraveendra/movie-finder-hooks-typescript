import React,{useState} from 'react';
import './App.css';

import Title from '../components/Title/Title';
import MovieList from '../components/MovieList/MovieList';

const API_KEY = process.env.REACT_APP_API_KEY;

export interface IMovie{
   imdbID:string,
    Poster:string,
    Title:string,
    Year:string,  
    Type?:string  
       
}



const App= ()=>{
  
  const [searchInput,setSearchInput]=useState<string>("")
  const [moviesList,setMoviesList]=useState <Array<IMovie>>([])
  const [error,setError]= useState<boolean|string>(false)

  const onHandleChange =(e:React.SyntheticEvent<HTMLInputElement>):void=>{
     setSearchInput(e.currentTarget.value)
 }

 
   const onHandleSubmit= async()=>{
    const response = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=${API_KEY}`)
    const data = await response.json()
    if(data.Response !=='False'){
     setError("");
     setMoviesList(data.Search);
     setSearchInput("");
     
    }else{
    setError("Please enter a valid movie name")
    setSearchInput("")
     } 
   }
  
 if(error){
  return(
    <div className="App">
     <h1>Movie Finder</h1>
     <Title searchInput={searchInput} handleChange={onHandleChange} handleSubmit={onHandleSubmit}/>
     <p>{error}</p>
   </div>
  )
 }

  return(
    <div className="App">
     <h1>Movie Finder</h1>
     <Title searchInput={searchInput} handleChange={onHandleChange} handleSubmit={onHandleSubmit}/>
     <MovieList moviesList={moviesList}/>
   </div>
  )
 }
 


export default App;
