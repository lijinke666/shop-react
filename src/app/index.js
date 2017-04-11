import React from 'react'
import { Router } from "react-router"
import history from "libs/history"
import routes from "libs/routes"

export default class App extends React.Component {
    render() {
        return (
            <Router history={history} routes={routes}></Router>
        )
    }
}
