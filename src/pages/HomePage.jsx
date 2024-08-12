import { homePageSvg } from "../cmps/Svgs"
import netflixBgc from '../assests/images/netflixBgc.jpg';
import tvPng from '../assests/images/tv.png';
import mobilePic from '../assests/images/mobilepic.jpg';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export function HomePage() {

    const [isFirstOpen, setIsFirstOpen] = useState(false)
    const [isSecondOpen, setIsSecondOpen] = useState(false)
    const [isThirdOpen, setIsThirdOpen] = useState(false)
    const [isFourthOpen, setIsFourthOpen] = useState(false)
    const [isFifthOpen, setIsFifthOpen] = useState(false)
    const [isSixthOpen, setIsSixthOpen] = useState(false)

    return (
        <section className="home-page">
            <div className="home-top-section" style={{ backgroundImage: `url(${netflixBgc})` }}>
                <div className="bgc1-home">
                    <div className="bgc2-home">
                        <header className="home-page-header">
                            <div className="logo">
                                {homePageSvg.logo}
                            </div>
                            <Link to={'/login'}>
                                <button>Sign In</button>
                            </Link>
                        </header>
                        <section className="info-section">
                            <h2>Unlimited movies, TV shows, and more</h2>
                            <h3>Watch anywhere. Cancel anytime.</h3>
                            <form>
                                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                                <div>
                                    <input type="text" />
                                    <NavLink to={'/login'}>
                                        <button aria-label="Email address">Get Started &gt;</button>
                                    </NavLink>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom-section home-second-section">
                <div className="text flex column">
                    <h2>Enjoy on your TV</h2>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                </div>
                <div className="graphics">
                    <img src={tvPng} alt="TV" />
                    <div>
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" controls autoPlay loop muted />
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom-section home-third-section">
                <div className="graphics">
                    <img src={mobilePic} alt="mobile picture" className="mobile-image" />
                    <div className="loading-stranger-things">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="stranger-things" />
                        <div className="text-section">
                            <h4>Stranger Things</h4>
                            <p>Downloading..</p>
                        </div>
                        <div className="gif"></div>
                    </div>
                </div>
                <div className="text flex column">
                    <h2>Download your shows to watch offline</h2>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>
            </div>
            <hr />
            <div className="bottom-section home-fourth-section">
                <div className="text flex column">
                    <h2>Watch everywhere</h2>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
                <div className="graphics">
                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt="TV" />
                    <div>
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" controls autoPlay loop muted />
                    </div>

                </div>
            </div>
            <hr />
            <div className="bottom-section home-fifth-section">
                <div className="graphics">
                    <img src='https://occ-0-1855-56.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png' alt="TV" />
                </div>
                <div className="text flex column">
                    <h2>Create profiles for kids</h2>
                    <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                </div>
            </div>
            <hr />
            <div style={{ width: '100%', margin: 'auto' }}>
                <section className="frequently-asked-questions">
                    <h2>Frequently Asked Questions</h2>
                    <section className="questions-section">
                        <div className="full-question">
                            <button className="question" onClick={() => { setIsFirstOpen(!isFirstOpen) }}>
                                What is Netflix?
                                <div style={{ transform: isFirstOpen ? 'rotate(-45deg)' : '' }}>{homePageSvg.plusButton}</div>
                            </button>
                            {isFirstOpen && <div className="text">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            </div>}
                        </div>
                        <div className="full-question">
                            <button className="question" onClick={() => { setIsSecondOpen(!isSecondOpen) }}>
                                How much does Netflix cost?
                                <div style={{ transform: isSecondOpen ? 'rotate(-45deg)' : '' }}>{homePageSvg.plusButton}</div>
                            </button>
                            {isSecondOpen && <div className="text">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₪32.90 to ₪69.90 a month. No extra costs, no contracts.                            </div>}
                        </div>
                        <div className="full-question">
                            <button className="question" onClick={() => { setIsThirdOpen(!isThirdOpen) }}>
                                Where can I watch?
                                <div style={{ transform: isThirdOpen ? 'rotate(-45deg)' : '' }}>{homePageSvg.plusButton}</div>
                            </button>
                            {isThirdOpen && <div className="text">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.                            </div>}
                        </div>
                        <div className="full-question">
                            <button className="question" onClick={() => { setIsFourthOpen(!isFourthOpen) }}>
                                How do I cancel?
                                <div style={{ transform: isFourthOpen ? 'rotate(-45deg)' : '' }}>{homePageSvg.plusButton}</div>
                            </button>
                            {isFourthOpen && <div className="text">
                                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.                            </div>}
                        </div>
                        <div className="full-question">
                            <button className="question" onClick={() => { setIsFifthOpen(!isFifthOpen) }}>
                                What can I watch on Netflix?
                                <div style={{ transform: isFifthOpen ? 'rotate(-45deg)' : '' }}>{homePageSvg.plusButton}</div>
                            </button>
                            {isFifthOpen && <div className="text">
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.                            </div>}
                        </div>
                        <div className="full-question">
                            <button className="question" onClick={() => { setIsSixthOpen(!isSixthOpen) }}>
                                Is Netflix good for kids?                                <div style={{ transform: isSixthOpen ? 'rotate(-45deg)' : '' }}>{homePageSvg.plusButton}</div>
                            </button>
                            {isSixthOpen && <div className="text">
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.                            </div>}
                        </div>
                    </section>
                </section>
            </div>
            <section className="info-section bottom">
                <form>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <div>
                        <input type="text" />
                        <NavLink to={'/login'}>
                            <button aria-label="Email address">Get Started &gt;</button>
                        </NavLink>
                    </div>
                </form>
            </section>
        </section>

    )
}
