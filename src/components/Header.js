import React from 'react';
import './Header.scss';
import data from '../data/header.json'

export default function Header() {
    return(
        <div className='header'>
            <h1 className='header__name'>{data.name}</h1>
            <h2 className='header__email'>{data.email}</h2>
        </div>
    );
};