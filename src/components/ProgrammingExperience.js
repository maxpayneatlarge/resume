import React from 'react';
import NavigationBar from './NavigationBar';
import './ProgrammingExperience.scss';
import data from '../data/programmingexperience.json';
import SectionHeading from './SectionHeading';

export default function ProgrammingExperience() {
    return(
        <div className='programming-experience'>
            <SectionHeading sectionTitle="PROGRAMMING EXPERIENCE" />
            {Object.keys(data).map((entry, index)=>{
                return(
                    <div key={index} className='programming-experience__container'>
                        <h4 className='programming-experience__section-label'>{entry}:</h4>
                        <span className='programming-experience__section'>{data[entry]}</span>
                    </div>
                );
            })}
            <NavigationBar backButtonText='Back' backButtonHref='/' 
                nextButtonText='Professional Experience' nextButtonHref='/professional'
            />
        </div>
    );
};
