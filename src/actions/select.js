export const select = (client) => {
    console.log('Chosen client is ' + client.general.firstName);
    return {
        type:'CLIENT_SELECTED',
        payload:client
    }
}