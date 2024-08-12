import { homePageSvg } from "../cmps/Svgs";
import netflixBgc from '../assests/images/netflixBgc.jpg';
import tvPng from '../assests/images/tv.png';
import mobilePic from '../assests/images/mobilepic.jpg';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export function HomePage() {

    const [openQuestions, setOpenQuestions] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false
    });

    function toggleQuestion(questionKey) {
        setOpenQuestions(prevState => {
            const newState = { one: false, two: false, three: false, four: false, five: false, six: false };
            newState[questionKey] = !prevState[questionKey];
            return newState;
        });
    }

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
            <hr />
            <div style={{ width: '100%', margin: 'auto' }}>
                <section className="frequently-asked-questions">
                    <h2>Frequently Asked Questions</h2>
                    <section className="questions-section">
                        {['one', 'two', 'three', 'four', 'five', 'six'].map((questionKey, index) => (
                            <div className="full-question" key={questionKey}>
                                <button className="question" onClick={() => toggleQuestion(questionKey)}>
                                    {getQuestionText(index)}
                                    <div style={{ transform: openQuestions[questionKey] ? 'rotate(-45deg)' : '' }}>
                                        {homePageSvg.plusButton}
                                    </div>
                                </button>
                                {openQuestions[questionKey] && <div className="text slide-up">
                                    {getAnswerText(index)}
                                </div>}
                            </div>
                        ))}
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
    );
}

function getQuestionText(index) {
    const questions = [
        "What is Netflix?",
        "How much does Netflix cost?",
        "Where can I watch?",
        "How do I cancel?",
        "What can I watch on Netflix?",
        "Is Netflix good for kids?"
    ];
    return questions[index];
}

function getAnswerText(index) {
    const answers = [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₪32.90 to ₪69.90 a month. No extra costs, no contracts.",
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.",
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
    ];
    return answers[index];
}
