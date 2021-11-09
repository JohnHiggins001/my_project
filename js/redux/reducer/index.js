import { combineReducers } from 'redux'
import theme from './theme'
import user from './user'
import home from './homelist'
import search from './searchlist'
/**
 * 合并reducer
 * 
 */
const index = combineReducers({
    theme,
    user,
    home,
    search,
});

export default index;