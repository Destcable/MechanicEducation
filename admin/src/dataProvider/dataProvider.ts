import getList from "./providerFunctions/getList";
import deleteMany from "./providerFunctions/deleteMany";
import create from "./providerFunctions/create";
import getOne from "./providerFunctions/getOne";
import update from "./providerFunctions/update";
import deleteOne from "./providerFunctions/delete";
import getMany from "./providerFunctions/getMany";

const dataProvider = {
    getList,
    // getOne,
    deleteMany,
    getMany,
    // delete: deleteOne,
    create,
    // update
}

export default dataProvider;