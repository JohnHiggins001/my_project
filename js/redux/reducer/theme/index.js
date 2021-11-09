import Types from '../../action/types'
import color from '../../../style/colorStyle'

const defaultState = {
    theme: color.activeBarColor,
}

export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.THEME_INIT:
            return {
                ...state,
                theme: action.theme
            };
        case Types.THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            };
        default: return state;
    }
}
