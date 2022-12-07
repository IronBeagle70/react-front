import React from 'react';
import "./OneItemStyle.css";

import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
function OneItem(props) {

    return (
        <li className='card'>
            <span onClick={props.onComplete} className='card__icon'>{ props.completed ? <FaCheckCircle />:<FaRegCircle />}</span>
            <p className='card__text'>{props.text}</p>
            <span onClick={props.onDelete} className='card__icon'><FaTrashAlt /></span>
        </li>
    );
};

export { OneItem };