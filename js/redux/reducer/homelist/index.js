import Types from '../../action/types'

const defaultState = {
    data: 'default',
    isLoading: true,
}

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.HOME_LIST_SUCCESS:
            return {
                ...state,
                [action.tabName]: {
                    ...state[action.tabName],
                    items: action.items,
                    tabName: action.tabName,
                    type: action.type,
                    isLoading: false,
                }
            };
        case Types.HOME_LIST_REFRESHING:
            return {
                ...state,
                [action.tabName]: {
                    ...state[action.tabName],
                    isLoading: true,
                }
            }
        case Types.HOME_LIST_FAIL:
            return {
                ...state,
                [action.tabName]: {
                    ...state[action.tabName],
                    isLoading: false,
                }
            }

        default: return state;
    }
}
