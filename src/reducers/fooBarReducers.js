const updateFooRequestReducer = (state, action) => state;
const storeFooRequestReducer = (state, action) => state;
const loadFooRequestReducer = (state, action) => state;
const loadFooResponseReducer = (state, action) => state;
const updateBarRequestReducer = (state, action) => state;
const storeBarRequestReducer = (state, action) => state;
const loadBarRequestReducer = (state, action) => state;
const loadBarResponseReducer = (state, action) => state;

const fooBarReducers = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_FOO_REQUEST': return loadFooRequestReducer(state, action);
        case 'UPDATE_FOO_REQUEST': return updateFooRequestReducer(state, action);
        case 'STORE_FOO_REQUEST': return storeFooRequestReducer(state, action);
        case 'LOAD_FOO_RESPONSE':return loadFooResponseReducer(state, action);
        case 'LOAD_BAR_REQUEST':return loadBarRequestReducer(state, action);
        case 'UPDATE_BAR_REQUEST':return updateBarRequestReducer(state, action);
        case 'STORE_BAR_REQUEST':return storeBarRequestReducer(state, action);
        case 'LOAD_BAR_RESPONSE':return loadBarResponseReducer(state, action);
        default: return state;
    }
};

export default fooBarReducers;
