const initialState = {
    category: 0,
    sortBy: 'popular',
};

const filters = (state = initialState, action) => {
    action = {
        type: 'SET_SORT_BY',
        payload: 'price'
    }
    if (typeof action === 'SET_SORT_BY') {
        return {
            ...state,
            sortBY: action.payload
        };
    }
    return state;
};

export default filters;