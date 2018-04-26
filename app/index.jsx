import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RouteMap from './router/routeMap'
const render = (RouteMap) => {
    ReactDOM.render(
        <AppContainer>
            <RouteMap/>
        </AppContainer>,
        document.getElementById('app')
    )
}
render(RouteMap)
if (module.hot) {
    module.hot.accept('./router/RouteMap', () => render(RouteMap))
}