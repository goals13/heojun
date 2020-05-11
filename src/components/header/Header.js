import React from 'react';
import './Header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './About';

const Header = () => {
    return(
    <div className='header'>
        <div className='dropdown'>
            <MenuIcon className='dropdown-menu' />
            
            <div className="dropdown-content">
                    <Link to='./About'>About</Link>

                    <Route path='./About' component={About} />
            </div>

        </div>
        
        <div className='home'><HomeIcon className='home-click' /></div>

    </div>
    );
}

export default Header;

