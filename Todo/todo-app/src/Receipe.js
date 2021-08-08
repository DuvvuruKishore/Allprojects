import React from 'react';
import style from './Recepie.module.css';

function Receipe({title,calories,image,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ol>
            {ingredients.map(e=>(
                <li>{e.text}</li>
            ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Receipe;