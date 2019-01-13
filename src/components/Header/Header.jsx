import React from 'react';
import './Header.sass';
import logo from '../../images/food-picky-logo.png';

import Navigation from 'components/Navigation/Navigation.jsx';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar">
                    <div className="container header-block">
                        <a className="logo" href="#">
                            <img src={logo} alt="food picky" />
                        </a>
                        <Navigation />
                    </div>
                </nav>
            </header>
        );
    }
};