import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Home from '../contrainers/Home'
import App from '../contrainers/App'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Home}></Route>
            </Router>
        )
    }
}

export default RouteMap