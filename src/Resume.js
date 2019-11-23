import React from 'react';
import {Router} from '@reach/router';
import './Resume.scss';
import Header from './components/Header';
import Summary from './components/Summary';
import ProgrammingExperience from './components/ProgrammingExperience';

export default function Resume() {
  return (
    <div className='Resume'>
      <Header />
      <Router>
        <Summary path='/' />
        <ProgrammingExperience path='experience' />
      </Router>
    </div>
  );
};
