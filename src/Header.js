import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon  from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
        <div className='header__left'>
        <MenuIcon />
        <Link to='/'> 
        <img 
            className='header__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/768px-YouTube_Logo_%282013-2017%29.svg.png" 
            alt=''
            />
        </Link>
           
        </div>
           
        <div className='header__input'>
            <input onChange={e => setInputSearch(e.target.value)}  
            value={inputSearch} 
            placeholder='Search' 
            type='text' 
            />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header__inputButton' /> 
            </Link>
        </div>   
           
        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar 
            alt='Nithin Upadhyaya'
            src='https://avatars.githubusercontent.com/u/80251327?s=400&u=9de7797e5ef5898e9aa184e420f7a4bcc94e9afb&v=4'
            />
        </div>   
        </div>
    )
}

export default Header
