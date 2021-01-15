import React, {useEffect} from 'react';
import NominateBtn from './NominateBtn';
import 

function MovieResults(props) {


	return (
		<>
			{props.movies.map((movie) => (
				<div className='movieBox'>
					<div className='image-container d-flex justify-content-left m-3'>
						<img src={movie.Poster} alt='movie'></img>
					</div>
					<div>
						<h4>{movie.Title}</h4>
						<p>{movie.Year}</p>
						<div
							onClick={() => props.handlenominateClick(movie)}
							className='d-flex align-items-center justify-content-center'>
						</div>
						{<NominateBtn />}
					</div>
				</div>



			))}
		</>
	);
};

export default MovieResults;