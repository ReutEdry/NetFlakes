import { useEffect, useRef } from 'react'
import img from '../assests/images/profileImg.png'
import { utilService } from '../services/util.service'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteUserProfile } from '../store/actions/user.actions'

export function DeleteProfile() {

    const { state: profile } = useLocation()
    const navigate = useNavigate()

    async function onDeleteProfile() {
        try {
            await deleteUserProfile(profile._id)
            navigate('/userProfiles')
        } catch (er) {
            console.log('er:', er);
        }
    }

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
                        <img src={profile.imgUrl} alt="" />
                        <p className="name">{profile.profileName}</p>
                    </div>
                    <p className="warning-text flex">This profile's history - including My List, ratings and activity - will be gone forever, and you won't be able to access it again.</p>
                </div>

                <div className="btn-actions">
                    <Link to={{ pathname: '/profileEdit', state: profile }}>
                        <button className="save-btn">Keep Profile</button>
                    </Link>
                    {/* <Link to='/userProfiles'> */}
                    <button onClick={onDeleteProfile}>Delete Profile</button>
                    {/* </Link> */}
                </div>
            </section>

        </section>
    )
}