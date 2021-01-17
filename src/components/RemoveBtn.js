import React from "react";
import { connect } from 'react-redux';

function RemoveBtn(props) {
    return (
        <button type="button" onClick={() => {
            props.dispatch({
                type: "REM_MOVIE",
                payload: props.movieTitle
            });
         
        }}  className="btn removeBtn">
            Remove Nomination
        </button>
   
    )
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch,
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RemoveBtn);