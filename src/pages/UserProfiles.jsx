import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { profilesSvg } from "../cmps/Svgs";
import { useState } from "react";

export function UserProfiles() {

  const user = useSelector(storeState => storeState.userModule.user)
  const [isProfileEdit, setIsProfileEdit] = useState(false)
  console.log(user.profiles);

  function onEditProfile(ev, profileId) {
    // ev.stopPropagation()
    console.log(profileId);

  }

  return (
    <section className="user-profiles">
      <div>
        <h1>Who's watching?</h1>

        <ul>
          {user.profiles.map((profile) =>
            <li key={profile._id}>
              <Link to={isProfileEdit ? '/profileEdit' : '/media'}>
                <div >
                  <div className={`img-box ${isProfileEdit && 'editable-profile'}`} style={{ backgroundImage: `url(${profile.imgUrl})` }}>
                  </div>
                  <p>{profile.profileName}</p>
                </div>
                {isProfileEdit && <span className="edit-svg flex" onClick={(ev) => onEditProfile(ev, profile._id)}>{profilesSvg.edit}</span>}
              </Link>
            </li>
          )}

          {!(user.profiles.length >= 5) && <li>
            <Link to={'/'}>
              <div>
                <span className="flex align-center plus-svg">{profilesSvg.plus}</span>
                <p className="add-profile">Add Profile</p>
              </div>
            </Link>
          </li>}
        </ul>

      </div>

      <button className={`edit-profiles ${isProfileEdit && 'done-edit'}`} onClick={() => setIsProfileEdit(prev => prev = !prev)} >

        {/* <Link to={'/'} className="manage-profile"> */}
        {!isProfileEdit ? 'Manage Profiles' : 'Done'}
        {/* </Link> */}
      </button>


    </section >
  )
}
