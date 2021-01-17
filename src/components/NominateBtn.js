import React from 'react';
import { connect } from 'react-redux';



function NominateBtn(props) {
    console.log("nominate button is clicked!", props.movieTitle);

    //linear seach to determine if target is in selectedMovies array 
    function linearSearch(selectedMovie, movie) {
        
        let array = []
        for (let i = 0; i <selectedMovie.length; i++) {
            if (selectedMovie[i].value === movie.movieTitle) {
                array.push(i.value)
            }
            else {
                return -1
            }
        }
        linearSearch();
        // console.log("found " + movie + "in" + selectedMovie) 
    };

    return (
        <div>
            <span>
                <button type="button" id="nomBtn" className="btn btn-light nominateBtn"
                onClick={() => {
                    if (linearSearch === -1) { //if search is unsuccessful 
                          props.dispatch({
                            type: "NOM_MOVIE", //allow nominate movie button clickable
                            payload: props.movieTitle 
                        });
                    }
                else { //if search is successful and movie has been found
                    function disableBtn() {
                        document.getElementById("nomBtn").disabled = true;
                      }
                    disableBtn();
                    function alreadyNom() {
                        alert("This movie has already been nominated for a Shoppie! Please choose another movie to nominate or remove nomination.");
                      }
                      alreadyNom();
                }} 
            }
            >NOMINATE</button>
            </span>
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