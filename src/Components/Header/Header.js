import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h2 > </h2>
            <img className="logo" src={logo} alt="" />
            <nav> <a href="/shop">Shop</a><a href="/order">Order</a><a href="/contact">Contact</a></nav>
        </div>
    );
};

export default Header;