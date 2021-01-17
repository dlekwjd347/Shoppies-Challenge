import React from 'react';
import { connect } from 'react-redux';

function Banner(props) {
    if (props.selectedMovie.length === 5) {
        return (
            <div>
                <p>You have 5 nominations</p>
            </div>
        );
    }
    else {
        return (<></>);
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
    };
  };
    
  export default connect(
    mapStateToProps
  )(Banner);
  