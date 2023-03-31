export const uiActionsTypes = {
    SET_DRAWER_IS_OPEN: 'SET_DRAWER_IS_OPEN',
}

const dataState = {
    drawerIsOpen: false
}

export const uiReducer = (state = dataState, action) => {
    switch (action.type) {
        case uiActionsTypes.SET_DRAWER_IS_OPEN:
            return {...state, drawerIsOpen: action.value}
        default:
            return state
    }
}