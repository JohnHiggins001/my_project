import Types from '../../action/types'

const defaultState = {
    username: '小明',
}

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.USERNAME_CHANGE:
            return {
                ...state,
                username: action.username
            };
        default: return state;
    }
}
