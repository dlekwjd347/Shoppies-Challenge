import React from 'react';
import NominateBtn from './NominateBtn';


function MovieResults(props) {
	return (
		<div className='resultsbody'>
			<div className="d-flex justify-content-left">
				{props.movies.map((movie) => (
					<div className='row movieBox container-fluid '>
						<div>
							<div className='image-container'>
								<img src={movie.Poster} alt='movie'></img>
							</div>
							<div >
								<div className='movieInfo'>
								<h4>{movie.Title}</h4>
								<p>{movie.Year}</p>
								</div>
								<div className='row btncenter'>
								{<NominateBtn movie={movie} />}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default MovieResults;