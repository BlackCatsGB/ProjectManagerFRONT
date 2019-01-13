import React, { PureComponent, Fragment } from 'react';

import logo from '../../images/food-picky-logo.png';

import './Footer.sass';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer className='footer'>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <a className="logo" href="#">
                                <img src={logo} alt="food picky" />
                            </a>
                            <p>Order Delivery & Take-Out</p>
                        </div>
                        <div className="col">
                            <h5>About Us</h5>
                            <a href="#">About us</a>
                            <a href="#">History</a>
                            <a href="#">Our Team</a>
                            <a href="#">We are hiring</a>
                        </div>
                        <div className="col">
                            <h5>How it Works</h5>
                            <a href="#">Enter your location</a>
                            <a href="#">Choose restaurant</a>
                            <a href="#">Choose meal</a>
                            <a href="#">Pay via credit card</a>
                            <a href="#">Wait for delivery</a>
                        </div>
                        <div className="col">
                            <h5>Pages</h5>
                            <a href="#">Search results page</a>
                            <a href="#">User Sing Up Page</a>
                            <a href="#">Pricing page</a>
                            <a href="#">Make order</a>
                            <a href="#">Add to cart</a>
                        </div>
                        <div className="col">
                            <h5>Popular locations</h5>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Sarajevo</a>
                                    <a href="#">Tuzla</a>
                                    <a href="#">Zagreb</a>
                                    <a href="#">Beograd</a>
                                    <a href="#">Gradacac</a>
                                </div>
                                <div className="col">
                                    <a href="#">Split</a>
                                    <a href="#">Sibenik</a>
                                    <a href="#">Brcko</a>
                                    <a href="#">New York</a>
                                    <a href="#">Los Angeles</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>Payment Options</h5>
                        </div>
                        <div className="col">
                            <h5>Address</h5>
                            <p>Concept design of oline food order and deliveye,planned as restaurant directory</p>
                            <h5>Phone <a href="#">080 000012 222</a></h5>
                        </div>
                        <div className="col">
                            <h5>Addition informations</h5>
                            <p>Join the thousands of other restaurants who benefit from having their menus on TakeOff</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}