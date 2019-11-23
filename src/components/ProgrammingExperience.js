import React from 'react';
import './ProgrammingExperience.scss';
import NavigationBar from './NavigationBar';
import data from '../data/programmingexperience.json';

export default function ProgrammingExperience() {
    return(
        <div className='programming-experience'>
            <h3 className='programming-experience__heading'>PROGRAMMING EXPERIENCE</h3>
            {Object.keys(data).map((entry, index)=>{
                return(
                    <div key={index} className='programming-experience__container'>
                        <h4 className='programming-experience__section-label'>{entry}:</h4>
                        <span className='programming-experience__section'>{data[entry]}</span>
                    </div>
                );
            })}
            <NavigationBar backButtonText='Back' backButtonHref='/' />
        </div>
    );
};
