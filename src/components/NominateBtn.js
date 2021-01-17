import React, { useContext } from 'react';
import { connect } from 'react-redux';



function NominateBtn(props) {
    console.log("nominate button is clicked!", props.movieTitle);
  

    return (
        <div>
            <span>
                {/* <pre style={{color: "white"}} >{JSON.stringify(props.selectedMovie)}</pre> */}
                <button type="button" onClick={() => {
                    props.dispatch({
                        type: "NOM_MOVIE",
                        payload: props.movieTitle
                    });
                    
                }} 
                className="btn btn-light nominateBtn">NOMINATE</button>
               
            </span>
        </div>
        
    )
};

// state : redux state (how you access the GLOBAL state at the component level)
//called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.
//getState
function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie,
    };
};

// dispatch: how you allow dispatch function to be performed at the component level
//called once on component creation. It will receive dispatch as an argument, and should return an object full of functions that use dispatch to dispatch actions.
//dispatch
function mapDispatchToProps(dispatch) {
    return {
        dispatch: action.payload,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NominateBtn);