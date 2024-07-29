import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { LoginSignup } from './pages/LoginSignup'
import { UserProfiles } from './pages/UserProfiles'
import { MediaIndex } from './pages/mediaIndex'
import { MovieIndex } from './pages/MovieIndex'
import { SeriesIndex } from './pages/SeriesIndex'
import { MediaDisplay } from './pages/MediaDisplay'
import { MediaDetails } from './cmps/MediaDetails'




export function RootCmp() {
    return (
        <div>
            {/* <AppHeader /> לפי תנאי*/}
            <main>
                <Routes>
                    <Route path="/login" element={<LoginSignup />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/userProfiles" element={<UserProfiles />} />
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


