import * as actionTypes from "../actions/actionTypes"

const counterReducer = (state = 0, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_ONE:
            return (newState = state + action.payload)
        case actionTypes.DECREASE_ONE:
            return (newState = state - action.payload)
        case actionTypes.INCREASE_TWO:
            return (newState = state + action.payload)

        default: //Eger yukaridakilere uymuyorsa state in kendisini default olarak donduruyoruz
            return state;
    }
}

export default counterReducer