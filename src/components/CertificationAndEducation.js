import React from 'react';
import NavigationBar from './NavigationBar';
import SectionHeading from './SectionHeading';
import styled from 'styled-components';
import data from '../data/certificatesandeducation.json';

const CertificationAndEducationContainer = styled.div`
    font-size: 10pt;
    text-align: left;
`;

const CertificationSection = styled.ul`
    list-style-type: none;
`;

const EducationSection = styled.ul`
    list-style-type: none;
`;

export default function CertificationAndEducation(){
    return(
        <CertificationAndEducationContainer>
            <SectionHeading sectionTitle='CERTIFICATIONS' />
            <CertificationSection>
                {data.certifications && data.certifications.map((cert, index)=>
                    <li key={index}>{cert.certificationEntry}</li>
                )}
            </CertificationSection>
            <SectionHeading sectionTitle='EDUCATION' />
            <EducationSection>
                {data.education && data.education.map((entry, index)=>
                    <li key={index}>{entry.educationEntry}</li>
                )}
            </EducationSection>
            <NavigationBar backButtonText='Back' backButtonHref='/professional' />
        </CertificationAndEducationContainer>
    );
}