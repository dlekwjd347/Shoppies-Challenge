import React from 'react';
import NominateBtn from './NominateBtn';



function MovieResults(props) {
	return (
		<div>
			{props.movies.map((movie) => (
				<div className='row movieBox container-fluid d-flex justify-content-left'>
					<div className='image-container'>
					<img src={movie.Poster} alt='movie'></img>
					</div>
				<div >
					<h4>{movie.Title}</h4>
					<div>
					<p>{movie.Year}</p>
					<div className = 'row'>
					{<NominateBtn movie={movie} />}
					</div>
					</div>
				</div>
				</div>
			))}	
		</div>
	)
}
export default MovieResults;