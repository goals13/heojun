import React from 'react';
import './Header.scss';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Switch, Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import bobo from './bobo';

const Header = () => {
        return(
        <div className='header'>
            <div className='dropdown'>
                <MenuIcon className='dropdown-menu' />
                
                <div className="dropdown-content">
                    <Route>
                        <Link to="/">Home</Link><br/>
                        <Link to="/About">소개</Link><br/>
                        <Link to="/bobo">이동하기</Link>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/About" component={About} />
                            <Route path="/bobo" component={bobo} /> 
                        </Switch>
                    </Route>
                </div>

            </div>
            
            <div className='home'><HomeIcon className='home-click' /></div>

        </div>
        );
}

export default Header;

