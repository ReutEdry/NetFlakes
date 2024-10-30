import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { UserProfiles } from './pages/UserProfiles'
import { MediaIndex } from './pages/mediaIndex'
import { MovieIndex } from './pages/MovieIndex'
import { SeriesIndex } from './pages/SeriesIndex'
import { MediaDisplay } from './pages/MediaDisplay'
import { EditProfile } from './pages/EditProfile'
import { MediaDetails } from './cmps/MediaDetails'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'




export function RootCmp() {
    return (
        <div>
            {/* <AppHeader /> לפי תנאי*/}
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/userProfiles" element={<UserProfiles />} />
                    <Route path="/profileEdit/:profileId?" element={<EditProfile />} />
                    <Route path="/media" element={<MediaIndex />}>
                        <Route path=":mediaId?" element={<MediaDetails />} />
                    </Route>
                    <Route path="/series" element={<SeriesIndex />} >
                        <Route path=":mediaId?" element={<MediaDetails />} />
                    </Route>
                    <Route path="/movie" element={<MovieIndex />} >
                        <Route path=":mediaId" element={<MediaDetails />} />
                    </Route>
                    <Route path="/play" element={<MediaDisplay />} />
                </Routes>
            </main>
        </div>
    )
}


