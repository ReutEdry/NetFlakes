import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { userService } from '../services/user.service'
import { homePageSvg } from '../cmps/Svgs'

export function Login(props) {
    const location = useLocation()
    const [credentials, setCredentials] = useState({ email: location.state || '', password: '' })
    const [isInfoOpen, setIsInfoOpen] = useState(false)

    function handleChange(ev) {

        const { name, value } = ev.target
        setCredentials((prevCred => (
            { ...prevCred, [name]: value }
        )))
        console.log(credentials);
    }



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
                    <Link to={'/'}>
                        <div>
                            {homePageSvg.logo}
                        </div>
                    </Link>
                </header>

                <div className='sign-in-container'>
                    <h1>Sign In</h1>

                    {!isCorrect && <div className='incorrect-input'>Incorrect password or email</div>}
                    <form action="">
                        <div className="input-container">
                            <input type="email" id="email" required placeholder=" " name='email' value={credentials.email} onChange={(ev) => handleChange(ev)} />
                            <label htmlFor="email">Email or mobile number</label>
                        </div>
                        <div className="input-container">
                            <input type="password" name='password' id="password" required placeholder=" " onChange={(ev) => handleChange(ev)} />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button>Sign in</button>
                    </form>

                    <div className="login-opts">
                        <p>OR</p>
                        <Link to='/' className='guest'>
                            Login as a <span>GUEST</span>
                        </Link>
                        <p> {`New to Netflix? `}
                            <Link to='/signup'>
                                Sign up now
                            </Link>
                        </p>
                    </div>

                    <div className='info'>
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. {!isInfoOpen && <span onClick={() => setIsInfoOpen(true)}> Learn more</span>}</p>
                        {isInfoOpen && <p>The information collected by Google reCAPTCHA is subject to the Google <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                        </p>}
                    </div>

                </div>
            </div>
        </div>
    )
}

