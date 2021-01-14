import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieResults from './components/MovieResults';
import MovieResultsHeading from './components/MovieResultsHeading';
import SearchBox from './components/SearchBox';
import NominateBtn from './components/NominateBtn';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);


  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=762eb5d3`;

		const response = await fetch(url);
		const responseJson = await response.json();

		console.log(responseJson);

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };
  
  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieNominations = JSON.parse(
			localStorage.getItem('react-movie-app-nominees')
		);

		if (movieNominations) {
			setNominees(movieNominations);
		}
	}, []);

	const addNominatedMovie = (movie) => {
		const newNominatedList = [...nominees, movie];
		setNominees(newNominatedList);
		
	};

  return (
    <div className='container-fluid'>
			<div className='row d-flex align-items-center mt-4 mb-4 moviesHeading'>
				<MovieResultsHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieResults
					movies={movies}
					handlenominateClick={addNominatedMovie}
					NominateBtnComponent={NominateBtn}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieResultsHeading heading='Nominees' />
			</div>
			<div className='row'>
				<MovieResults
					movies={nominees}
					
				/>
			</div>
		</div>
  );
}

export default App;
 