import React from 'react';

import "./DesktopCreateStyle.css"

function DesktopCreate() {

    const handleCreateDesktop = (e) =>{
        e.preventDefault();
        console.log('tarea creada');
    };

    const handleDesktopTextValue = (e) =>{
        console.log(e.target.value);
    }

    return (
        <section className='desktop'>
            <h2 className='desktop__subtitle'>Add new Item</h2>
            <form className='desktop__form'>
                <div className='desktop__form__container'>
                    <label className='desktop__label' htmlFor="newTask">Item Name</label>
                    <input onChange={handleDesktopTextValue} className='desktop__input' type="text" name='newTask' id='newTask' placeholder='Enter the new Item...' autoComplete='off' autoFocus />
                    <button onClick={handleCreateDesktop} className='desktop__btn' type="submit">Create Item</button>
                </div>
            </form>
        </section>
    );
};

export { DesktopCreate };