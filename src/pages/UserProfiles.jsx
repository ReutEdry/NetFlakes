import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { profilesSvg } from "../cmps/Svgs";
import { useEffect, useRef, useState } from "react";
import { utilService } from "../services/util.service";

export function UserProfiles() {

  const user = useSelector(storeState => storeState.userModule.user)
  const [isProfileEdit, setIsProfileEdit] = useState(false)
  const containerRef = useRef()
  console.log(user.profiles)

  useEffect(() => {
    utilService.animateCSS(containerRef.current)
  }, [])


  function onEditProfile(profileId) {
    console.log(profileId);
  }

  async function onActivate() {
    setIsProfileEdit(prev => prev = !prev)
    await utilService.animateCSS(containerRef.current)
  }

  console.log(isProfileEdit);


  return (
    <section className="user-profiles">
      <section ref={containerRef} className="container">

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
                  {isProfileEdit && <span className="edit-svg flex" onClick={() => onEditProfile(profile._id)}>{profilesSvg.edit}</span>}
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

        <button className={`edit-profiles ${isProfileEdit && 'done-edit'}`} onClick={onActivate} >
          {!isProfileEdit ? 'Manage Profiles' : 'Done'}
        </button>

      </section>

    </section >
  )
}
