import React from 'react'
import s from './../Dialogues.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let pathToDialog = ("/dialogues/" + props.id);
    return (
        <div className={s.dialog}>
            <NavLink to={pathToDialog}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;