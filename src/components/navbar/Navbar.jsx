import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <header className={classes.header}>
            
            <ul className={classes.menu}>
                <li><Link to="/">صفحه اصلی</Link></li>
                <li><Link to="/aboutus">درباره ما</Link></li>
            </ul>
        </header>
            
        </>
    );
}

export default Navbar;