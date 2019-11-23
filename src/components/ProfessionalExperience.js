import React from 'react';
import NavigationBar from './NavigationBar';
import SectionHeading from './SectionHeading';
import './ProfessionalExperience.scss';

export default function ProfessionalExperience() {
    return (
        <div className='professional-experience'>
            <SectionHeading sectionTitle='PROFESSIONAL EXPERIENCE' />
            <NavigationBar backButtonText='Back' backButtonHref='/experience' />
        </div>
    );
};