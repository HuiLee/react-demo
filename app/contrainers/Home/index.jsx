import React from 'react'
import {Link} from 'react-router-dom'
// https://gorangajic.github.io/react-icons/
// FontAwesome Material,Typicons,
import {MdKeyboardArrowDown,MdSearch,MdPerson} from 'react-icons/lib/md'

class Home extends React.Component {
    render() {
        return (<div>
            <p>Home<MdKeyboardArrowDown size={24}/> <MdSearch size={24}/><MdPerson size={24}/></p>
            <Link to="/list">to list</Link>
        </div>)
    }
}

export default Home
