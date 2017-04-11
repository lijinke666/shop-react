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
            getComponent(location, cb) {
                System.import('app/components/Game')
                    .then((module) => cb(null, module.default))
                    .catch(err => console.log('aaa',err))
            }
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
            getComponent(location, cb) {
                System.import('app/components/About')
                    .then((module) => cb(null, module.default))
                    .catch(err => console.log('aaa',err))
            }
        }
    ]
}