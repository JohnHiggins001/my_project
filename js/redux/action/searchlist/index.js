import DataStore, { FLAG_STORAGE } from '../../../network/dao';
import Types from '../types'
import ActionUtil from '../ActionUtil'

export function onSearchListRefreshing(tabName, url) {
    return dispatch => {
        dispatch({
            type: Types.SEARCH_LIST_REFRESHING,
            tabName: tabName,
        });
        let dataStore = new DataStore();
        dataStore.fetchData(url, FLAG_STORAGE.flag_trending)
            .then(data => {
                ActionUtil.handleData(Types.SEARCH_LIST_SUCCESS, dispatch, tabName, data)
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: Types.SEARCH_LIST_FAIL,
                    tabName: tabName,
                    err,
                });
            })
    }
}

export function onSearchTypeChange(type) {
    return { type: Types.SEARCH_TAB_CHANGE, queryStarType: type };
}

export function onNeedRefresh(isNeedRefresh) {
    return { type: Types.SEARCH_NEED_REFRESH, isNeedRefresh: isNeedRefresh };
}


