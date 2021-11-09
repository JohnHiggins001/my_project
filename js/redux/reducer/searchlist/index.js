import Types from '../../action/types'

const defaultState = {
    data: 'default',
    isLoading: false,
}

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.SEARCH_LIST_SUCCESS:
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
        case Types.SEARCH_LIST_REFRESHING:
            return {
                ...state,
                [action.tabName]: {
                    ...state[action.tabName],
                    isLoading: true,
                }
            }
        case Types.SEARCH_LIST_FAIL:
            return {
                ...state,
                [action.tabName]: {
                    ...state[action.tabName],
                    isLoading: false,
                }
            }
        case Types.SEARCH_TAB_CHANGE:
            return {
                ...state,
                queryStarType: action.queryStarType
            };
        case Types.SEARCH_NEED_REFRESH:
            return {
                ...state,
                isNeedRefresh: action.isNeedRefresh,
                isLoading: false,
            };

        default: return state;
    }
}
