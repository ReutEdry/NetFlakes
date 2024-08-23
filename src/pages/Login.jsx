import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { homePageSvg, loginPageSvg } from '../cmps/Svgs'
import { loadUsers, login } from '../store/actions/user.actions'

export function Login(props) {
    const location = useLocation()
    const [credentials, setCredentials] = useState({ email: location.state || '', password: '' })
    const [isInfoOpen, setIsInfoOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isCorrectCred, setIsCorrectCred] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()
    }
        , [])

    function handleChange(ev) {

        const { name, value } = ev.target
        setCredentials((prevCred => (
            { ...prevCred, [name]: value }
        )))
    }

    async function onLogin(ev) {
        ev.preventDefault()

        try {
            const user = await login(credentials)
            console.log(user)
            if (!user) setIsCorrectCred(false)
            else {
                clearState()
                navigate('/userProfiles')
            }

        } catch (err) {
            console.log(`Could'nt login user`, err);
        }
    }

    async function onConnectAsAGuest() {
        try {
            await login({ email: 'guest@gmail.com', password: "1234" })
            clearState()
            navigate('/userProfiles')
        } catch (err) {
            console.log('Could not connect as a guest', err);
        }
    }

    function onTogglePaswordVisbility(ev) {
        setIsVisible(prev => !prev)
    }

    function clearState() {
        setCredentials({ email: '', password: '' })
    }

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

                    {!isCorrectCred && <div className='incorrect-input'>Incorrect password or email</div>}
                    <form action="" onSubmit={(ev) => onLogin(ev)}>
                        <div className="input-container">
                            <input
                                type="email"
                                id="email"
                                required placeholder=" "
                                name='email'
                                value={credentials.email}
                                onChange={(ev) => handleChange(ev)}
                                autoComplete="off"
                            />
                            <label htmlFor="email">Email or mobile number</label>
                        </div>
                        <div className="input-container">
                            <input
                                type={isVisible ? 'text' : "password"}
                                name='password'
                                id="password"
                                required placeholder=" "
                                value={credentials.password}
                                onChange={(ev) => handleChange(ev)}
                            />
                            <label htmlFor="password">Password</label>
                            <span onClick={onTogglePaswordVisbility} className='flex align-center'>{isVisible ? loginPageSvg.hidePassword : loginPageSvg.visiblePassword}</span>
                        </div>
                        <button>Sign in</button>
                    </form>

                    <div className="login-opts">
                        <p>OR</p>
                        <button className='guest' onClick={onConnectAsAGuest}>
                            Login as a <span>GUEST</span>
                        </button>
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

