import { userService } from '../../services/user.service'

export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
// export const SET_WATCHED_USER = 'SET_WATCHED_USER'
// export const REMOVE_USER = 'REMOVE_USER'
export const REMOVE_USER_PROFILE = 'REMOVE_USER_PROFILE'

const initialState = {
    user: userService.getLoggedinUser(),
    users: [],
    watchedUser: null
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_USERS:
            newState = { ...state, users: action.users }
            break
        case SET_USER:
            newState = { ...state, user: action.user }
            break
        case REMOVE_USER_PROFILE:
            var newUserProfiles = state.user.profiles.filter(profile => profile._id != action.profileId)
            //    state.user.profiles = newUserProfiles
            newState = {
                ...state, user: {
                    ...state.user, profiles: newUserProfiles
                }
            }
            console.log(newState);

            break
        // case SET_WATCHED_USER:
        //     newState = { ...state, watchedUser: action.user }
        //     break
        // case REMOVE_USER:
        //     newState = {
        //         ...state,
        //         users: state.users.filter(user => user._id !== action.userId)
        //     }
        //     break
        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
