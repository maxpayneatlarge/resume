import React from 'react';
import NavigationBar from './NavigationBar';
import SectionHeading from './SectionHeading';
import './ProfessionalExperience.scss';
import data from '../data/employmentrecords.json';
import EmploymentRecord from './EmploymentRecord';

export default function ProfessionalExperience() {
    return (
        <div className='professional-experience'>
            <SectionHeading sectionTitle='PROFESSIONAL EXPERIENCE' />
            {data.employment.map((record, index) => <EmploymentRecord record={record} key={index}/>)}
            <NavigationBar backButtonText='Back' backButtonHref='/experience' 
                nextButtonText='Certification and Education' nextButtonHref='/education'/>
        </div>
    );
};