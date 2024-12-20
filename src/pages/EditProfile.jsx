import { useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { profilesSvg } from "../cmps/Svgs"
import { ProfileImgs } from "../cmps/profileimgs"
import { Link } from "react-router-dom"
import { saveUserProfile } from "../store/actions/user.actions"

export function EditProfile() {
    const { state: userProfile } = useLocation()
    // console.log(location.state.profile);

    const [profile, setProfile] = useState(userProfile)
    const [isLoading, setIsLoading] = useState(true)
    const [isImgsOpen, setIsImgsOpen] = useState(false)
    const navigate = useNavigate()

    async function onChangeProfileName() {
        try {
            await saveUserProfile(profile)
            navigate('/userProfiles')
        } catch (err) {
            console.log('Had issues to save the new profile name =>', err)

        }

    }

    function onNavigate(isDeleting) {
        const loc = isDeleting ? `/deleteProfile` : '/userProfiles'
        navigate(`${loc}`, { state: profile })
    }

    function handleChange(ev) {
        const { value } = ev.target
        console.log('value:', value)

        setProfile((prevProfile => (
            { ...prevProfile, profileName: value }
        )))
    }

    return (
        <section className="edit-profile">
            <section className="edit-container animate-box">
                <h2>Edit Profile</h2>
                <div className="profile-details flex">

                    <div className="img-box">
                        <img
                            src={profile.imgUrl}
                            alt=""
                            onLoad={() => setIsLoading(false)}
                            onError={() => setIsLoading(true)} />
                        {isLoading && <div class="nfLoader edit-loader"></div>}
                        <span
                            className="edit-svg flex"
                            onClick={() => setIsImgsOpen(prev => !prev)}
                        >{profilesSvg.edit}</span>
                    </div>

                    <div className="input-container">

                        <input type="text"
                            value={profile.profileName}
                            autoFocus
                            onChange={(ev) => handleChange(ev)}
                        />
                    </div>

                    {isImgsOpen && <ProfileImgs />}
                </div>

                <div className="btn-actions">
                    <button className="save-btn" onClick={onChangeProfileName}>Save</button>
                    <Link to='/userProfiles'>
                        <button>Cancel</button>
                    </Link>
                    <Link to='/deleteProfile' state={{ profile }}>
                        <button>Delete Profile</button>
                    </Link>
                </div>

            </section>
        </section >
    )
}
