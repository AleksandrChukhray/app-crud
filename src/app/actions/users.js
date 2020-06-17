import constants from '../const'


// action creators
export const getUsersInit = () => ({
    type: constants.users.GET_USERS_INIT
});

export const getUsersSuccess = data => ({
    type: constants.users.GET_USERS_SUCCESS,
    payload: data
});

export const getUsersFailure = data => ({
    type: constants.users.GET_USERS_FAILURE,
    payload: data
});

export const addUsersInit = () => ({
    type: constants.users.ADD_USERS_INIT
});

export const addUsersSuccess = data => ({
    type: constants.users.ADD_USERS_SUCCESS,
    payload: data
});

export const addUsersFailure = data => ({
    type: constants.users.ADD_USERS_FAILURE,
    payload: data
});

export const updateUsersInit = () => ({
    type: constants.users.UPDATE_USERS_INIT
});

export const updateUsersSuccess = data => ({
    type: constants.users.UPDATE_USERS_SUCCESS,
    payload: data
});

export const updateUsersFailure = data => ({
    type: constants.users.UPDATE_USERS_FAILURE,
    payload: data
});

export const deleteUsersInit = () => ({
    type: constants.users.DELETE_USERS_INIT
});

export const deleteUsersSuccess = id => ({
    type: constants.users.DELETE_USERS_SUCCESS,
    payload: id
});

export const deleteUsersFailure = data => ({
    type: constants.users.DELETE_USERS_FAILURE,
    payload: data
});

export const searchUsers = value => ({
    type: constants.users.SEARCH_USERS,
    payload: value
})