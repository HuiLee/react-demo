import React from 'react'
class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer style={{textAlign:'center'}} onClick={this.clickHandler.bind(this)}>FOOTER</footer>
            </div>
        )
    }
    clickHandler(e){
        console.log('Footer...')
    }
}

export default Footer