export const loadFooRequest = () => ({
    type: 'LOAD_FOO_REQUEST'
});

export const updateFooRequest = value => ({
    type: 'UPDATE_FOO_REQUEST',
    value
});

export const storeFooRequest = value => ({
    type: 'STORE_FOO_REQUEST',
    value
});

export const loadFooResponse = value => ({
    type: 'LOAD_FOO_RESPONSE',
    value
});

export const loadBarRequest = () => ({
    type: 'LOAD_BAR_REQUEST'
});

export const updateBarRequest = value => ({
    type: 'UPDATE_BAR_REQUEST',
    value
});

export const storeBarRequest = value => ({
    type: 'STORE_BAR_REQUEST',
    value
});

export const loadBarResponse = value => ({
    type: 'LOAD_BAR_RESPONSE',
    value
});
