import React from 'react'
import "./AllListStyle.css";

function AllList(props) {
    return (
        <section className='container'>
            <ul className='container__ul'>
                {props.children}
            </ul>
        </section>
    );
};

export  { AllList };