export const httpGet = (clients) => {
    return {
        type:'GET_CLIENTS',
        payload:clients
    }
}