import Types from '../types'

export function onUserNameChange(username) {
    return { type: Types.USERNAME_CHANGE, username: username };
}