export default function (state=null, active) {
    switch(active.type) {
        case 'CLIENT_SELECTED':
            return active.payload;
        default:
            return state;
    }
}