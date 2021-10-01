import 'bootstrap';
import React, {useState} from'react'
import SearchBar from './SearchBar'
import AddingFilm  from './AddingFilm';
import MovieCard from './MovieCard'
function HomePage({movies,setMovies}) {
  const [AddFilm, setAddFilm] = useState(false);
  // inputFilmName,inputRate for the searching bar  
  const [inputFilmName, setinputFilmName]=useState(" ");
  const [inputRate, setinputRate] = useState(""); 
  //updateList: to Add the movies to the movies list 
  const updateList=(newmovie)=>{setMovies(movies=>[...movies , newmovie])}
  // function tha oppen the modal Adding film

    return (
      <div>
        <AddingFilm AddFilm={AddFilm} setAddFilm={setAddFilm} updateList={updateList} />  
        <SearchBar   setinputRate={setinputRate} setinputFilmName={setinputFilmName} />
        <MovieCard  movies ={movies} inputRate={inputRate} inputFilmName={inputFilmName} /> 
      </div>
    )
}

export default HomePage
