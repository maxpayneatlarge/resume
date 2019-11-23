import React from 'react';
import NavigationBar from './NavigationBar';
import './Summary.scss';
import data from '../data/summary.json';
import SectionHeading from './SectionHeading';

export default function Summary() {
    return (
        <div className='summary'>
            <SectionHeading sectionTitle='SUMMARY' />
            <p className='summary__text'>{data.summary}</p>
            <NavigationBar  nextButtonText='Programming Experience' nextButtonHref='/experience' />
        </div>
    );
};


