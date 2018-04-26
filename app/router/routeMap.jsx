import React from 'react'
import {Router, Route} from 'react-router'
import Home from '../contrainers/Home'
import App from '../contrainers/App'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }

    render() {
        return (
            <Router history={this.proper.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap