import React, { useContext, useEffect } from "react";
import SearchContext from "../utils/SearchContext";

function ResultsPage() {
    const {inputVal} = useContext(SearchContext);

    return (
        <div>
            {(() => {
                if (inputVal) {
                    return (
                        <div>
                            <h1>Results for... {inputVal}</h1>
                            <Container>
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
                            </Container>
                        </div>
                    )
                }

                else {
                    return (
                        <p>search for movies</p>
                    )
                }
            })}
        </div>
    )
}

export default ResultsPage;