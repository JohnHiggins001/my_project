/**
 * 
 * @param {*} type 页面类型及操作进度
 * @param {*} dispatch 分发结果给reducer
 * @param {*} tabName topTab名称
 * @param {*} data 请求回调的结果
 */
function handleData(type, dispatch, tabName, data) {
    let items = [];
    if (data && data.data) {
        if (Array.isArray(data.data)) {
            items = data.data
        } else if (Array.isArray(data.data.items)) {
            items = data.data.items
        }
    }
    dispatch({
        type: type,
        items: items,
        tabName,
    })
}

export default { handleData, }