import { combineReducers } from 'redux';
import AppReducer from './appReducer';

const rootReducer = combineReducers({
    main: AppReducer
})

export default rootReducer;