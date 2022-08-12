import Followers from '~/pages/Followers'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'

export const publicRoutes = [
    { path: "/", page: Home, contentPage: "Home" },
    { path: "/followers", page: Followers, contentPage: "Followers" },
    { path: "/profile", page: Profile, contentPage: "Profile" },
]