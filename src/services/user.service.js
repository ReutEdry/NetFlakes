import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USER = 'userdb'

export const userService = {
    getUsers,
    login,
    signup,
    // logout,
    getLoggedinUser,
    // saveLocalUser,
    // getById,
    // remove,
    // update,
    // changeScore
}

window.userService = userService

const usersStorage = [
    {
        _id: 'r101', username: 'Reut', password: '0000', email: 'reut@gmail.com', profiles: [
            { profileName: 'Reut', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg', preferences: ['Horror & Mystery'] }
        ]
    },
    {
        _id: 'm101', username: 'Maya', password: '1234', email: 'maya@gmail.com', profiles: [
            { profileName: 'Maya', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg', preferences: ['Comedy'] }
        ]
    },
    {
        _id: 'guest', username: 'Guest', password: '1234', email: 'guest@gmail.com', profiles: [
            { profileName: 'Guest', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg', preferences: ['Romance'] }
        ]
    },
    {
        _id: 'r', username: 'r', password: '1234', email: 'r@1', profiles: [
            { profileName: 'r', imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg', preferences: ['Action'] }
        ]
    },
]


async function getUsers() {

    let users = utilService.loadFromStorage('user')
    if (!users || !users.length) utilService.saveToStorage(STORAGE_KEY_USER, usersStorage)
    users = await storageService.query('user')
    return users
    // return storageService.query('user')
    // return httpService.get(`user`)
}

// async function getById(userId) {
//     const user = await storageService.get('user', userId)
//     // const user = await httpService.get(`user/${userId}`)
//     return user
// }

// function remove(userId) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }


async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY_USER)
    const user = users.find(user => {
        return user.email.toUpperCase() === userCred.email.toUpperCase() && user.password === userCred.password
    })

    // const user = await httpService.post('auth/login', userCred)
    if (user) return saveLocalUser(user)
}

async function signup(userCred) {
    const users = await storageService.query(STORAGE_KEY_USER)
    const isEmailAvalible = users.find(user => user.email.toUpperCase() === userCred.email.toUpperCase())
    if (isEmailAvalible) return null

    userCred.name = _capitalizeFirstLetter(userCred.name)
    userCred.profiles = [
        { profileName: userCred.name, imgUrl: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg', preferences: ['Horror & Mystery', 'Romance'] }
    ]

    console.log('user:', userCred);

    const user = await storageService.post(STORAGE_KEY_USER, userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}

// async function logout() {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
//     // return await httpService.post('auth/logout')
// }

function saveLocalUser(user) {
    console.log(user);

    user = { _id: user._id, email: user.email, profiles: user.profiles, userName: user.userName }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _capitalizeFirstLetter(userName) {
    console.log(userName.charAt(0).toUpperCase() + userName.slice(1));

    return userName.charAt(0).toUpperCase() + userName.slice(1)
}



// // categories: Drama
// // Comedy
// // Action
// // Fantasy
// // Horror & Mystery
// // Crime
// // Romance
// // Documentary
// // Reality
// // Animation
// // Family
// // Musical