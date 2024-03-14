
const parseData = (item) => { 
            
    const observedByIds = item.observedBy?.map(user => user.id);

    const convertedData = {
        ...item,
        observedByIds,
    };
    return convertedData;
};

export default parseData;