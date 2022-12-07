import React from 'react'

import "./CreateButtonStyle.css";

function CreateButton() {

    const handleCreateButton = (e) =>{
        e.preventDefault();
        console.log('abriendo modal');
    }

    return (
        <div className='create'>
            <button onClick={handleCreateButton} className='create__btn'>+</button>
        </div>
    );
};

export { CreateButton };