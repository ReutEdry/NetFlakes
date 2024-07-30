import { homePageSvg } from "../cmps/Svgs"

export function HomePage() {
    return (
        <section className="home-page">
            <header className="home-page-header">
                <div className="logo">
                    {homePageSvg.logo}
                </div>
                <button>Sign In</button>
            </header>
        </section>
    )
}

// urlBGC =https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/f98f0417-811d-4887-95e9-cdab79763a68/IL-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c9646565-c4b1-402f-83c8-26016a4ecc5b_small.jpg