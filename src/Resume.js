import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import CertificationAndEducation from './components/CertificationAndEducation';
import ProfessionalExperience from './components/ProfessionalExperience';
import ProgrammingExperience from './components/ProgrammingExperience';
import Summary from './components/Summary';
import './Resume.scss';

export default function Resume() {
  return (
    <div className='Resume'>
      <Header />
      <Router>
        <Summary path='/' />
        <ProgrammingExperience path='experience' />
        <ProfessionalExperience path='professional' />
        <CertificationAndEducation path='education' />
      </Router>
    </div>
  );
};
