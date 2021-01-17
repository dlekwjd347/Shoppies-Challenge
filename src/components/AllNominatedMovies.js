import React from 'react';
import RemoveBtn from './RemoveBtn';
import { connect } from 'react-redux';

function AllNominatedMovies(props) {
  console.log(props.selectedMovie)
    return (
      
        <div>
			{props.selectedMovie.map((movie) => (
				<div className='movieBox'>
					{/* <div className='row image-container d-flex justify-content-left m-4 col-4'>
						<img src={movie.Poster} alt='movie'></img>
					</div> */}
					<div className = 'row'>
						{/* <h4>{movie}</h4>
						<p>{movie.Year}</p> */}
						{<RemoveBtn movieTitle={movie.Title} />}
					</div>
					
				</div>
			))}	
      </div>
       
    )
    
}

function mapStateToProps(state) {
  return {
      selectedMovie: state.selectedMovie
  };
};

function mapDispatchToProps(dispatch) {
  return {
      dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllNominatedMovies);
