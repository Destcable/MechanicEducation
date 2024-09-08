import { createStore } from "redux"

function storeReducer(state = {
    headerTheme: null,
    tasks: [],
    username: null
}, action: any) {
    switch (action.type) {
        case 'headerTheme/change':
            state.headerTheme = action.payload;
            return state;
        case 'tasks/change':
            state.tasks = action.payload;
            return state
        case 'username/change':
            state.username = action.payload;
            return state;
      default:
            return state
    }
};

export let store = createStore(storeReducer)