import {getInitialData} from '../utils/api'
import {receiveTweets} from './tweets'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUsers'

const AUTHED_ID = 'parikshithkm'
export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
        .then(({users, tweets}) => {
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}