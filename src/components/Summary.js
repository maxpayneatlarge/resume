import React from 'react';
import NavigationBar from './NavigationBar';
import './Summary.scss';
import data from '../data/summary.json';

export default function Summary() {
    return (
        <div className='summary'>
            <h3 className='summary__heading'>SUMMARY</h3>
            <p className='summary__text'>{data.summary}</p>
            <NavigationBar  nextButtonText='Programming Experience' nextButtonHref='experience' />
        </div>
    );
};


