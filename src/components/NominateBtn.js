import React from 'react';
import { connect } from 'react-redux';

function NominateBtn(props) {
    // console.log("nominate button is clicked!", props.movieTitle);
    //linear seach to determine if target is in selectedMovies array 
    function linearSearch(selectedMovie, movie) {
        for (let i = 0; i < selectedMovie.length; i++) {
            if (selectedMovie[i].imdbID === movie.imdbID) {
                // found
                return i;
            }
        } // went through all the list, not found
        return -1;
    }

    const index = linearSearch(props.selectedMovie, props.movie);
    console.log(index)
    return (
        <div>
            <button type="button" id="nomBtn" className="btn btn-light nominateBtn"
                onClick={() => {
                    if (index === -1) { //if search is unsuccessful 
                        props.dispatch({
                            type: "NOM_MOVIE", //allow nominate movie button clickable
                            payload: props.movie
                        });
                    }
                    return alert("Movie has been nominated!");
                }
                } disabled={index !== -1 || props.selectedMovie.length === 5}>NOMINATE</button>
        </div>
    )
};

// state : redux state (how you access the GLOBAL state at the component level)
//called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.
//getState
function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
    };
};

// dispatch: how you allow dispatch function to be performed at the component level
//called once on component creation. It will receive dispatch as an argument, and should return an object full of functions that use dispatch to dispatch actions.
//dispatch
function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NominateBtn);