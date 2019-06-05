import {combineReducers} from 'redux';
import ItemReducers from './ItemReducer';
export default combineReducers({
    items:ItemReducers
})
