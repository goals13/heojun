import React from 'react';
import './Header.scss';
import HomeIcon from '@material-ui/icons/Home';
import CheckIcon from '@material-ui/icons/Check';
import ListIcon from '@material-ui/icons/List';
import { Switch, Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import ToCheck from './ToCheck';
import ViewResult from './ViewResult';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                Heo Jun
            </div>
            <div className="menu">
                <Route>
                    <Link to="/">
                        <div className='pick'><HomeIcon className='home-click' /></div>
                    </Link>
                    <Link to="/ToCheck"><div className='pick'>
                        <CheckIcon className='tocheck-click' />검사하기</div>
                    </Link>
                    <Link to="/ViewResult"><div className='pick'>
                        <ListIcon className='viewresult-click' />결과 보기</div>
                    </Link>

                    <Route exact path="/" component={Home} />
                    <Switch>
                        <Route path="/ToCheck" component={ToCheck} />
                        <Route path="/ViewResult"  component={ViewResult} /> 
                    </Switch>
                </Route>
            </div>
        </div>
    );
};

export default Header;