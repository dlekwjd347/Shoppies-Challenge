//function will determine changes to a movie's state
//uses the action it receives to determine this change

import _ from 'lodash';
const initialState = {
    selectedMovie: []
};

//reducer function will dispatch actions depending on case determined by case
function reducer(state = initialState, action) {
    console.log("Hi i m reducer", action);
    console.log("action.payload =" + action.payload)
    switch (action.type) {
        case "NOM_MOVIE":
            return { ...state, selectedMovie: [...state.selectedMovie, action.payload] };
           
        case "REM_MOVIE":
            const selectedMovieCopy = [...state.selectedMovie]; 
            _.remove(selectedMovieCopy, function(movie) {
                return movie.imdbID === action.payload.imdbID;
            });
            return { ...state, selectedMovie: selectedMovieCopy };
        default:
            return state;
    }
}

export default reducer;