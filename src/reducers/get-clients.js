export default function (state=null, active) {
    switch(active.type) {
        case 'GET_CLIENTS':
            return active.payload;
        default:
            return state;
    }
}