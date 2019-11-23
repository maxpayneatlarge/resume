import React from 'react';
import styled from 'styled-components';
import fromTheme from '../theme';

const Heading = styled.h3`
    font-size: ${fromTheme('size12')};
    line-height: 1.2em;
    margin: 0;
    text-decoration: underline;
`;

export default function SectionHeading({sectionTitle}) {
    return(
        <Heading>{sectionTitle}</Heading>
    );
    
};