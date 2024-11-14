import { useEffect, useRef } from 'react'
import img from '../assests/images/profileImg.png'
import { utilService } from '../services/util.service'

export function DeleteProfile() {
    // const containerRef = useRef()

    // useEffect(() => {
    //     utilService.animateCSS(containerRef.current)
    // }, [])

    return (
        <section className="edit-profile delete-profile">
            <section className="edit-container animate-box">

                <h2>Delete Profile?</h2>

                <div className="profile-details flex">
                    <div className="img-box flex column">
                        <img src={img} alt="" />
                        <p className="name">name</p>
                    </div>
                    <p className="warning-text flex">This profile's history - including My List, ratings and activity - will be gone forever, and you won't be able to access it again.</p>
                </div>

                <div className="btn-actions">
                    <button className="save-btn">Keep Profile</button>
                    <button>Delete Profile</button>
                </div>
            </section>

        </section>
    )
}