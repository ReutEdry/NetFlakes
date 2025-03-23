import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { profilesSvg } from "../cmps/Svgs";
import { useEffect, useRef, useState } from "react";
import { utilService } from "../services/util.service";

export function UserProfiles() {

  const user = useSelector(storeState => storeState.userModule.user)

  const [isProfileEdit, setIsProfileEdit] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef()

  useEffect(() => {
    utilService.animateCSS(containerRef.current)
  }, [])


  function onNavigate(ev, profile) {
    ev.preventDefault()
    const loc = isProfileEdit ? '/profileEdit' : '/media'
    navigate(`${loc}`, { state: profile })
  }

  async function onActivate() {
    setIsProfileEdit(prev => prev = !prev)
    await utilService.animateCSS(containerRef.current)
  }

  return (
    <section className="user-profiles">
      <section ref={containerRef} className="container">

        <div>
          <h1>Who's watching?</h1>

          <ul>
            {user.profiles.map((profile) =>
              <li key={profile._id}>
                <Link onClick={(ev) => onNavigate(ev, profile)}>
                  <div >
                    <div className={`img-box ${isProfileEdit && 'editable-profile'}`} style={{ backgroundImage: `url(${profile.imgUrl})` }}>
                    </div>
                    <p>{profile.profileName}</p>
                  </div>
                  {isProfileEdit && <span className="edit-svg flex">{profilesSvg.edit}</span>}
                </Link>
              </li>
            )}

            {!(user.profiles.length >= 5) && !isProfileEdit && < li >
              <Link to={`/profileEdit`}>
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
