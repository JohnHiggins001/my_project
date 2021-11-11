import AsyncStorage from '@react-native-async-storage/async-storage';

_storeData = async (key, value) => {
    try {
        console.log('存储数据-->', JSON.parse(value))
        await AsyncStorage.setItem(
            key,
            value
        );
    } catch (error) {
        console.log('_storeData异常--->', error)
    }
};

_retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
        // else {
        //     return ''
        // }
    } catch (error) {
        console.log('_retrieveData异常--->', error)
    }
};

_removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('_removeData异常--->', error)
    }
};

_mergeData = async (key, oldValue, newValue) => {
    try {
        AsyncStorage.setItem(
            key,
            JSON.stringify(oldValue),
            () => {
                AsyncStorage.mergeItem(
                    key,
                    JSON.stringify(newValue),
                    () => {
                        AsyncStorage.getItem(key, (err, result) => {
                            console.log('merge后的数据---->', result);
                        });
                    }
                );
            }
        );
    } catch (error) {
        console.log('_mergeData异常--->', error)
    }
}
export default { _storeData, _retrieveData, _removeData, _mergeData }