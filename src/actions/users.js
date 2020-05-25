export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveTweets(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}