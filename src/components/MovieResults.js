import React from 'react';
import NominateBtn from './NominateBtn';

function MovieResults(props) {
	return (
		<>
			{props.movies.map((movie) => (
				<div>
					<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					
					<div
						onClick={() => props.handlenominateClick(movie)}
						className='d-flex align-items-center justify-content-center'
					>
						{<NominateBtn />}
					</div>
				</div>
				<div>
				<h4>{movie.Title}</h4>
				<h5>{movie.Year}</h5>
				</div>
				</div>
				
				
				
			))}
		</>
	);
};

export default MovieResults;