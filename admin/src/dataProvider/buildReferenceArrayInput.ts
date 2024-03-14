
const buildReferenceArrayInput = (dataIds = [], previousDataIds = []) => {
    const disconnect = previousDataIds.reduce((acc, id) => (dataIds.includes(id)) ? acc : [...acc, {id}], [])
    const connect = dataIds.reduce((acc, id) => (previousDataIds.includes(id)) ? acc : [...acc, {id}], [])

    const isConnectOrDisconnect = Boolean(disconnect.length) || Boolean(connect.length);

    return isConnectOrDisconnect ? { disconnect, connect} : undefined;
};

export default buildReferenceArrayInput;