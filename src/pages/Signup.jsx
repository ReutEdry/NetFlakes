import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../store/actions/user.actions";
import { loginPageSvg, signupSvg } from "../cmps/Svgs";

export function Signup() {
    const [credentials, setCredentials] = useState({ email: '', name: '', password: '' })
    const [isPasswordStandard, setIsPasswordStandard] = useState(true)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()

    function onChange(ev) {
        const name = ev.target.name
        const value = ev.target.value

        if (isFormSubmitted) {
            if (name === 'password') {
                if (value.length > 6 && value.length < 60) setIsPasswordStandard(true)
                else if (value.length <= 6 || value.length > 60) setIsPasswordStandard(false)
            }
        }

        setCredentials((prevCred) => ({ ...prevCred, [name]: value }))
    }


    async function onSignup(ev) {
        ev.preventDefault()
        setIsFormSubmitted(true)
        if (credentials.password.length <= 6 || credentials.password.length > 60) {
            setIsPasswordStandard(false)
            return
        }
        if (!credentials.email || !credentials.name || !credentials.password) return

        try {
            const user = await signup(credentials)
            if (user) {
                clearState()
                console.log('success');
                navigate('/userProfiles')
            } else {
                console.log(`Email has already been used`);
            }
        } catch (err) {
            console.log(`Could not sign up =>`, err)
        }
    }

    function clearState() {
        setCredentials({ email: '', name: '', password: '' })
        setIsFormSubmitted(false)
    }

    function onTogglePaswordVisbility(ev) {
        setIsVisible(prev => !prev)
    }

    return (
        <section className="signup-page">
            <header>
                <div>
                    <div className="logo-img">
                        <Link to={'/'}>
                            <img src="src/assests/images/netflicksLogo.png" alt="" />
                        </Link>
                    </div>
                    <div className="signin-btn">
                        <Link to='/login'>
                            Sign in
                        </Link>
                    </div>
                </div>
            </header>

            <div className='sign-up-box'>
                <section className="sign-up-container" >

                    <div className="info">
                        <h2>Create a password to start your membership</h2>
                        <p>Just a few more steps and you're done!</p>
                        <p className="h"> We hate paperwork, too.</p>
                    </div>
                    <form action="" onSubmit={(ev) => onSignup(ev)}>
                        <div className="input-container">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={credentials.email}
                                required
                                placeholder=" "
                                onChange={(ev) => onChange(ev)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={credentials.name}
                                required
                                placeholder=" "
                                onChange={(ev) => onChange(ev)} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-container">
                            <input className={!isPasswordStandard ? 'not-standard' : ''}
                                type={isVisible ? 'text' : "password"}
                                id="password"
                                name="password"
                                value={credentials.password}
                                required
                                placeholder=" "
                                onChange={(ev) => onChange(ev)} />
                            <label htmlFor="password">Add a password</label>
                            <span onClick={onTogglePaswordVisbility} className='signup-show-pass flex align-center'>{isVisible ? loginPageSvg.hidePassword : loginPageSvg.visiblePassword}</span>
                            {!isPasswordStandard && (
                                <p className="error-msg"> <span>{signupSvg.error}</span>Password should be between 6 and 60 characters.</p>
                            )}
                        </div>
                        <button>Let's start watching</button>
                    </form>
                </section>
            </div>
        </section>
    )
}