import {combineReducers} from 'redux';
import ClientsReducers from './clients.json';

const allReducers = combineReducers({
    clients: () => ClientsReducers
});

export default allReducers;