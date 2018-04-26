import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RouteMap from './router/routeMap'
import { Router, hashHistory } from 'react-router';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <RouteMap history={hashHistory}/>
        </AppContainer>,
        document.getElementById('app')
    )
}
render()
// if (module.hot) {
//     module.hot.accept('./App', () => render(App))
// }