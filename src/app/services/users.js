import api from '../../utils/request';
import actions from '../actions';

export const getUsers = () => {
    return dispatch => {
        dispatch(actions.users.getUsersInit());

        return api.get('/users')
            .then(data => dispatch(actions.users.getUsersSuccess(data)))
            .catch(data => dispatch(actions.users.getUsersFailure(data)))
    }
}

export const addUsers = data =>
    dispatch => {
        dispatch(actions.users.addUsersInit());

        return api.post('/users', data)
            .then(data => dispatch(actions.users.addUsersSuccess(data)), data => dispatch(actions.users.addUsersFailure(data)))
    }

export const updateUsers = (data, id) =>
    dispatch => {
        dispatch(actions.users.updateUsersInit());

        return api.update('/users', data, id)
            .then(data => dispatch(actions.users.updateUsersSuccess(data)))
            .catch(data => dispatch(actions.users.updateUsersFailure(data)))
    }

export const deleteUsers = id =>
    dispatch => {
        dispatch(actions.users.deleteUsersInit());

        return api.delete('/users', id)
            .then(data => dispatch(actions.users.deleteUsersSuccess(id)))
            .catch(data => dispatch(actions.users.deleteUsersFailure(data)))
    }

export const searchUsers = value =>
    dispatch => dispatch(actions.users.searchUsers(value));