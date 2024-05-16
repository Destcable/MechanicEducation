import { createStore } from "redux"

function storeReducer(state = { 
    headerTheme: null
}, action: any) {
    switch (action.type) {
      case 'headerTheme/change':
        return { headerTheme: action.payload }
      default:
        return state
    }
};

export let store = createStore(storeReducer)