import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="tab-container">
            <div className="tabs">
                <NavLink className={'tab-link'} to='/'> Posts</NavLink>
                <NavLink className={'tab-link'} to='/comments'> Comments</NavLink>
                <NavLink className={'tab-link'} to='/albums'> Albums</NavLink>
                <NavLink className={'tab-link'} to='/photos'> Photos</NavLink>
                <NavLink className={'tab-link'} to='/todos'> Todos</NavLink>
                <NavLink className={'tab-link'} to='/users'> Users</NavLink>
            </div>
        </div >
    )
}

export default Header