import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router"
import { profilesSvg } from "../cmps/Svgs";

export function EditProfile() {
    const location = useLocation()
    const [profile, setProfile] = useState(location.state)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    console.log(profile);

    function onNavigateBack() {
        navigate('/userProfiles')
    }

    function handleChange(ev) {
        const { value } = ev.target
        setProfile((prevProfile => (
            { ...prevProfile, profileName: value }
        )))
    }





    return (
        // <section className="edit-profile flex column">
        <section className="edit-profile">
            {/* <section className="user-profiles edit-profile"> */}
            <section className="edit-container">
                <h2>Edit Profile</h2>
                <div className="profile-details flex">

                    <div className="img-box">
                        <img
                            src={profile.imgUrl}
                            alt=""
                            onLoad={() => setIsLoading(false)}
                            onError={() => setIsLoading(true)} />
                        {isLoading && <div class="nfLoader edit-loader"></div>}
                        <span className="edit-svg flex">{profilesSvg.edit}</span>
                    </div>

                    <div className="input-container">

                        <input type="text"
                            value={profile.profileName}
                            autoFocus
                            onChange={(ev) => handleChange(ev)}
                        />
                    </div>
                </div>

                <div className="btn-actions">
                    <button className="save-btn" onClick={onNavigateBack}>Save</button>
                    <button onClick={onNavigateBack}>Cancel</button>
                    <button onClick={onNavigateBack}>Delete Profile</button>
                </div>

            </section>
        </section >
    )
}
