import profileImg from '/src/assests/images/profileImg.png'

export function ProfileImgs() {


    return (
        <section className='profile-imgs-container flex'>
            <img src={profileImg} style={{ width: '100px', height: '100px' }} alt="" />
            <img src={profileImg} style={{ width: '100px', height: '100px' }} alt="" />
            <img src={profileImg} style={{ width: '100px', height: '100px' }} alt="" />
            <img src={profileImg} style={{ width: '100px', height: '100px' }} alt="" />
        </section>
    )
}