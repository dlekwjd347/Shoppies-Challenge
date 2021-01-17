import React, { useContext } from 'react';
import NominateBtn from './NominateBtn';
import RemoveBtn from './RemoveBtn'
import movieContext from '../utils/movieContext';

function MovieResults(props) {
	const { ifNominated } = useContext(movieContext);
	return (
		<div>
	
	{props.movies.map((movie) => (
				<div className='movieBox'>
					<div className='image-container d-flex justify-content-left m-3'>
						<img src={movie.Poster} alt='movie'></img>
					</div>
					<div>
						<h4>{movie.Title}</h4>
						<p>{movie.Year}</p>

					</div>
				</div>
			))}

			{(props.movies.map((movie) => {
				if (ifNominated) {
					return (
						<>
							<div
								onClick={() => props.handlenominateClick(movie)}
								className='d-flex align-items-center justify-content-center'>
								{<NominateBtn movieTitle={movie.Title} />}
							</div>

						</>
					)


				}
				else {
					return (
						<>
							{<RemoveBtn movieTitle={movie.Title} />}
						</>
					)
				}
			}

		))}

		</div>

			)}
export default MovieResults;