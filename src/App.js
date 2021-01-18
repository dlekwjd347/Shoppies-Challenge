import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieResults from './components/MovieResults';
import ShoppiesHeading from './components/ShoppiesHeading';
import NomHeading from './components/NomHeading'
import SearchBox from './components/SearchBox';
import NominateBtn from './components/NominateBtn';
import RemoveBtn from './components/RemoveBtn';
import AllNominatedMovies from './components/AllNominatedMovies';
import Banner from './components/Banner';
import Toggle from './components/Toggle';

function App() {

	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [nominees, setNominees] = useState([]);

	
    const [toggled, setToggle] = React.useState(getInitialMode());
    React.useEffect(() => {
		localStorage.setItem("dark", JSON.stringify(toggled));
	  }, [toggled]);

	  function getInitialMode() {
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const userPrefersDark = getPrefColorScheme();
        // if mode was saved --> dark / light
        if (isReturningUser) {
          return savedMode;
          // if preferred color scheme is dark --> dark
        } else if (userPrefersDark) {
          return true;
          // otherwise --> light
        } else {
          return false;
        }
        // return savedMode || false;
      }

      function getPrefColorScheme() {
        if (!window.matchMedia) return;
    
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=762eb5d3`;

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



		<div className={toggled ? "dark-mode" : "light-mode"}>
			<div className='container-fluid'>
			<span style={{ color: toggled ? "grey" : "yellow" }}>☀︎</span>
            <input
              checked={toggled}
              onChange={() => setToggle(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <span style={{ color: toggled ? "white" : "white" }}>☾</span>
           
			<div>
				<Toggle />
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4 moviesHeading'>
				<ShoppiesHeading heading='THE SHOPPIES' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				<Banner />
			</div>
			<div>

			</div>
			<div className='row'>

				<MovieResults
					movies={movies}
					handlenominateClick={addNominatedMovie}
					NominateBtnComponent={NominateBtn}

				/>

			</div>
			<div className='row d-flex mt-4 mb-4'>
				<MovieResults
					movies={nominees}
				/>
				<div className='row d-flex mt-4 mb-4'>
					<NomHeading heading='Nominees' />
					<AllNominatedMovies
						RemoveBtnComponent={RemoveBtn} />
				</div>


			</div>
		</div>
		</div>
	);

}

export default App;
