export const ViewActionsTypes = {
    SET_COLOR_FILTERS: 'SET_COLOR_FILTERS',
    SET_DARK_FILTERS: 'SET_DARK_FILTERS',
    SET_FORM_FILTERS: 'SET_FORM_FILTERS',
    SET_VIEW_COLUMNS: 'SET_VIEW_COLUMNS'
}

const dataState = {
    colorFilters: {red: true, green: true, blue: true, yellow: true},
    darkFilters: 'all',
    formFilters: {circle: true, square: true},
    viewColumns: 4
}

export const viewReducer = (state = dataState, action) => {
    switch (action.type) {
        case ViewActionsTypes.SET_COLOR_FILTERS:
            return {...state, colorFilters: {...state.colorFilters, [action.value.key]: action.value.enabled}}
        case ViewActionsTypes.SET_DARK_FILTERS:
            return {...state, darkFilters: action.value}
        case ViewActionsTypes.SET_FORM_FILTERS:
            return {...state, formFilters: {...state.formFilters, [action.value.key]: action.value.enabled}}
        case ViewActionsTypes.SET_VIEW_COLUMNS:
            return {...state, viewColumns: action.value}
        default:
            return state
    }
}