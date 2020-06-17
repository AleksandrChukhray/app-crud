import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reducer from './users';

const rootReducer = combineReducers({
    users: reducer,
    form: formReducer
});

export default rootReducer;
