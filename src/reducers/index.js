
import {combineReducers} from 'redux';
import ActiveClient from './client-active';
import ClientsReducers from './clients.json';

const allReducers = combineReducers({
    clients: () => ClientsReducers,
    active: ActiveClient
});

export default allReducers;