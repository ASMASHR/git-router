import './App.css';
import 'bootstrap';
import React, {useState} from'react'
import Navbar from './components/navbar';
 import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {myLists} from './components/MovieList'
import HomePage from './components/HomePage';
import Footer from './components/Footer'
import MovieDescription from './components/MovieDescription'
function App() {
  const [movies, setMovies] = useState(myLists)
     return (
       <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
            <Route exact path="/">
              <HomePage movies={movies} setMovies={setMovies}/>
            </Route>
            <Route path="/Movie-Description/:id">
              <MovieDescription movies={movies}/>
            </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;