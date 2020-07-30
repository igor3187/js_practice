const initialState = {
    items: [],
    isLoaded: false,
};

const pizzas = (state = initialState, action) => {
    if (typeof action === 'SET_PIZZAS') {
        return {
            ...state,
            sortBY: action.payload,
        };
    }
    return state;
};

export default pizzas;