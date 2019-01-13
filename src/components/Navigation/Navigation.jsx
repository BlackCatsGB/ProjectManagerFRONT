import React, { PureComponent, Fragment } from 'react';

import './Navigation.sass';

export default class Navigation extends PureComponent {
    render() {
        return (
            <Fragment>
                <ul className="navi">
                    <li>
                        <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li>
                        <div className="nav-link">Food</div>
                        <div className="dropdown-menu active">
                            <a href="food_results.html">Food results</a>
                            <a href="map_results.html">Map results</a>
                        </div>
                    </li>
                    <li>
                        <div className="nav-link">Restaurants</div>
                        <div className="dropdown-menu">
                            <a href="restaurants.html">Search results</a>
                            <a href="profile.html">Profile page</a>
                        </div>
                    </li>
                    <li>
                        <div className="nav-link">Pages</div>
                        <div className="dropdown-menu">
                            <a href="pricing.html">Pricing</a>
                            <a href="contact.html">Contact</a>
                            <a href="submition.html">Submit restaurant</a>
                            <a href="registration.html">Registration</a>
                            <a href="checkout.html">Checkout</a>
                        </div>
                    </li>
                </ul>
            </Fragment>
        );
    }
}