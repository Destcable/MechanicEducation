import { createStore } from "redux"

function storeReducer(state = {
    headerTheme: null,
    tasks: [],
}, action: any) {
    switch (action.type) {
        case 'headerTheme/change':
            state.headerTheme = action.payload;
            return state;
        case 'tasks/change':
            state.tasks = action.payload;
            return state
      default:
            return state
    }
};

// @ts-ignore
export let store = createStore(storeReducer)