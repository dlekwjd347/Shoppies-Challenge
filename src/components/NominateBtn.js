import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NominateBtn(props) {
    console.log("nominate button is clicked!", props.movieTitle);
    //linear seach to determine if target is in selectedMovies array 
    function linearSearch(selectedMovie, movie) {
        for (let i = 0; i < selectedMovie.length; i++) {
            if (selectedMovie[i].value === movie.movieTitle) {
                // found
                return i;
            }
        } // went through all the list, not found
        return -1;
    }

    const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=762eb5d3`;

		const response = await fetch(url);
		const responseJson = await response.json();

		console.log(responseJson);

  };
    const notifyAdd = () => toast("Movie Successfully Added to Nominations!");

    const addMovieRequest = async () => {
        console.log(props.movieTitle);
        await getMovieRequest(props.movieTitle).then((data) => {
          console.log(data);
          return notifyAdd();
        });
      };
      

    return (
        <div>
            <button type="button" id="nomBtn" className="btn btn-light nominateBtn"
                onClick={() => {
                    if (linearSearch(props.selectedMovie, props.movieTitle) ) { //if search is unsuccessful 
                        props.dispatch({
                            type: "NOM_MOVIE", //allow nominate movie button clickable
                            payload: props.movieTitle
                        });
                    }
                    return (<ToastContainer
                        position="bottom-right"
                        
                        />);
                } 
                
                } disabled={linearSearch(props.selectedMovie, props.movieTitle) !== -1}>NOMINATE</button>
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