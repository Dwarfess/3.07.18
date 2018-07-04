import {combineReducers} from 'redux';
import ActiveClient from './client-active';
// import ClientsReducers from './clients.json';
import GetClients from './get-clients';

const allReducers = combineReducers({
    clients: GetClients,
    active: ActiveClient
});

export default allReducers;