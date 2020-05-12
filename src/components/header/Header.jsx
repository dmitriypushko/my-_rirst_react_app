import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.header}>
        <div>
            <img src="https://www.designevo.com/res/templates/thumb_small/cute-monkey-and-interesting-gaming.png" alt="some alt text"></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?<div> {props.login} <button onClick={props.logout}> Log out</button> </div>
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </div>

    </header>)
};

export default Header;