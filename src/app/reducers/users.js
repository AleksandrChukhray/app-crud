import constants from '../const'

const initialState = {
    users: [],
    searchResult: [],
    loading: false,
    errors: false
};

function reducer(state = initialState, action) {
    let errorMessage = null;

    switch (action.type) {
        case constants.users.GET_USERS_INIT:
            return {
                ...state,
                loading: true
            };
        case constants.users.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                searchResult: action.payload.reverse(),
                loading: false
            };
        case constants.users.GET_USERS_FAILURE:
            errorMessage = action.payload.message || 'Something went wrong';

            return {
                ...state,
                errors: errorMessage,
                loading: false
            };

        case constants.users.ADD_USERS_INIT:
            return {
                ...state,
                loading: true
            };
        case constants.users.ADD_USERS_SUCCESS:

            return {
                ...state,
                loading: false
            };
        case constants.users.ADD_USERS_FAILURE:
            errorMessage = action.payload.message || 'Something went wrong';

            return {
                ...state,
                errors: errorMessage,
                loading: false
            };

        case constants.users.UPDATE_USERS_INIT:
            return {
                ...state,
                loading: true
            };
        case constants.users.UPDATE_USERS_SUCCESS:

            return {
                ...state,
                loading: false
            };
        case constants.users.UPDATE_USERS_FAILURE:
            errorMessage = action.payload.message || 'Something went wrong';

            return {
                ...state,
                errors: errorMessage,
                loading: false
            };

        case constants.users.DELETE_USERS_INIT:
            return {
                ...state,
                loading: true
            };
        case constants.users.DELETE_USERS_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case constants.users.DELETE_USERS_FAILURE:
            errorMessage = action.payload.message || 'Something went wrong';

            return {
                ...state,
                errors: errorMessage,
                loading: false
            };

        case constants.users.SEARCH_USERS:
            const search = state.users.filter(item => item.username.includes(action.payload));

            return {
                ...state,
                searchResult: search
            }

        default:
            return state;
    }
}

export default reducer;
