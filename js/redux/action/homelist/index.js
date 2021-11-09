import DataStore, { FLAG_STORAGE } from '../../../network/dao';
import Types from '../types'
import ActionUtil from '../ActionUtil'

export function onHomeListRefreshing(tabName, url) {
    return dispatch => {
        dispatch({
            type: Types.HOME_LIST_REFRESHING,
            tabName: tabName,
        });
        let dataStore = new DataStore();
        dataStore.fetchData(url, FLAG_STORAGE.flag_popular)
            .then(data => {
                ActionUtil.handleData(Types.HOME_LIST_SUCCESS, dispatch, tabName, data)
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: Types.HOME_LIST_FAIL,
                    tabName: tabName,
                    err,
                });
            })
    }
}


