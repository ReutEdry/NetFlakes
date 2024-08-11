import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { userService } from '../services/user.service'
import TextField from '@mui/material/TextField';

import { loginPageSvg } from '../cmps/Svgs'

export function LoginSignup(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)
    const [isEmailEmpty, setIsEmailEmpty] = useState(true)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState('')
    const [users, setUsers] = useState([])
    let isEmpty = useRef()

    let isCorrect = true

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        props.onLogin(credentials)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        props.onSignup(credentials)
        clearState()
    }

    function toggleSignup() {
        setIsSignup(!isSignup)
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }

    // function onCheckIfInputIsmpty(ev) {
    //     console.log(ev.target.type);
    //     console.log(ev.target.value);
    //     if (ev.target.type === 'email') setIsEmailEmpty(false)

    // }

    // return (
    //     <div className="login-page">

    //         <h1>Sign In</h1>
    //         {/* <p>
    //             <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
    //         </p> */}
    //         {!isSignup && <form className="login-form" onSubmit={onLogin}>
    //             <select
    //                 name="username"
    //                 value={credentials.username}
    //                 onChange={handleChange}
    //             >
    //                 <option value="">Select User</option>
    //                 {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
    //             </select>

    //             {/* <input
    //                     type="text"
    //                     name="username"
    //                     value={username}
    //                     placeholder="Username"
    //                     onChange={handleChange}
    //                     required
    //                     autoFocus
    //                 />
    //                 <input
    //                     type="password"
    //                     name="password"
    //                     value={password}
    //                     placeholder="Password"
    //                     onChange={handleChange}
    //                     required
    //                 /> */}
    //             <button>Login</button>
    //         </form>}
    //         <div className="signup-section">
    //             {isSignup && <form className="signup-form" onSubmit={onSignup}>
    //                 <input
    //                     type="text"
    //                     name="fullname"
    //                     value={credentials.fullname}
    //                     placeholder="Fullname"
    //                     onChange={handleChange}
    //                     required
    //                 />
    //                 <input
    //                     type="text"
    //                     name="username"
    //                     value={credentials.username}
    //                     placeholder="Username"
    //                     onChange={handleChange}
    //                     required
    //                 />
    //                 <input
    //                     type="password"
    //                     name="password"
    //                     value={credentials.password}
    //                     placeholder="Password"
    //                     onChange={handleChange}
    //                     required
    //                 />
    //                 {/* <ImgUploader onUploaded={onUploaded} /> */}
    //                 <button>Signup</button>
    //             </form>}
    //         </div>
    //     </div>
    // )

    return (
        <div className="login-page">
            <div className="background">
                <header>
                    <div>
                        <Link to={'/'}>
                            {/* <span>{loginPageSvg.logo}</span> */}
                            <img src="src/assests/images/netflicksLogo.png" alt="" />
                        </Link>
                    </div>
                </header>

                <div className='sign-in-container'>
                    <h1>Sign In</h1>

                    {!isCorrect && <div className='incorrect-input'>Incorrect password or email</div>}
                    <form action="">
                        <div className="input-container">
                            <input type="email" id="email" required placeholder=" " />
                            <label htmlFor="email">Email or mobile number</label>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" required placeholder=" " />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button>Sign in</button>
                    </form>
                    {/* <p>OR</p> */}

                    <p className='sign-up-opts'>New to Netflix? <a href="">Sign up now</a></p>
                </div>
            </div>
        </div>
    )
}



{/* <TextField
                            sx={{

                                '& .MuiFilledInput-root': {
                                    '&:before': {
                                        borderBottom: 'none'
                                    },
                                    '&:after': {
                                        borderBottom: 'none'
                                    },
                                    '&:hover:before': {
                                        borderBottom: 'none'
                                    },
                                    fontSize: '1rem', fontFamily: 'inherit', lineHeight: '1.5rem',
                                    color: 'white'

                                },
                                '& .MuiInputLabel-root': {

                                    // 'label': {
                                    // height
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontFamily: 'inherit',
                                    fontSize: 12,
                                    // backgroundColor: 'red'
                                    // },
                                },
                                '& .MuiTextField-root': {

                                    width: 314,
                                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    backgroundColor: 'red',
                                }
                            }}
                            id="filled-search"
                            label="Email or mobile number"
                            type="search"
                            variant="filled"
                        /> */}
