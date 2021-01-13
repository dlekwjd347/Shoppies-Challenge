import React from 'react';

const MovieResults = (props) => {
	// const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div>
					<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					
					{/* <div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						{/* <FavouriteComponent /> 
					</div> */}
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