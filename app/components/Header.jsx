import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header style={{textAlign:'center',fontSize:'24px'}} onClick={this.clickHandler.bind(this)}>Header</header>
            </div>
        )
    }
    clickHandler(e){
        console.log('Footer...')
    }
}
export default Header