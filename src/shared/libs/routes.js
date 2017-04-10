import Root from "app/components/Root"
import About from "app/components/About"
import Game from "app/components/Game"
import Music from "app/components/Music"
import Home from "home"
import MusicDetail from "app/components/MusicDetail"

export default {
    path: "/",
    component: Root,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        {
            path:"home",
            component:Home
        },
        {
            path:"game",
            component:Game
        },
        {
            path:"music",
            component:Music
        },
        {
            path:"music/:id",
            component:MusicDetail
        },
        {
            path:"about",
            component:About
        }
    ]
}