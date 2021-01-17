import React from 'react';
import NominateBtn from './NominateBtn';
import RemoveBtn from './RemoveBtn'


function MovieResults(props) {
	return (
		<div>
			{props.movies.map((movie) => (
				<div className='movieBox'>
					<div className='row image-container d-flex justify-content-left m-4'>
						<img src={movie.Poster} alt='movie'></img>
					</div>
					<div className = 'row'>
						<h4>{movie.Title}</h4>
						<p>{movie.Year}</p>
						{<NominateBtn movieTitle={movie.Title} />}
						{<RemoveBtn movieTitle={movie.Title} />}
					</div>
					
				</div>
			))}	
		</div>
	)
}
export default MovieResults;