import { Link } from "react-router-dom";

export function Signup(second) {

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
                    <form action="">
                        <div className="input-container">
                            <input type="email" id="email" required placeholder=" " />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password" required placeholder=" " />
                            <label htmlFor="password">Add a password</label>
                        </div>
                        <button>Let's start watching</button>
                    </form>
                </section>
            </div>
        </section>
    )
}