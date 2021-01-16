//function will determine changes to a movie's state
//uses the action it receives to determine this change

//A selector is a function that accepts Redux state as an argument and returns data that is derived from that state.

const initialState = {
    someList: [],
};

function reducer(state = initialState, action) {
    console.log("Hi i m reducer", action);
    switch (action.type) {
        case "OPERATION":
            return { ...state, someList: [...state.someList, action.payload] };
        default:
            return state;
    }
}

export default reducer;