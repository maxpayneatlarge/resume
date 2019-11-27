import React from 'react';
import styled from 'styled-components';
import fromTheme from '../theme';

const Heading = styled.h3`
    font-size: ${fromTheme('heading3Size')};
    line-height: 1.2em;
    margin: 0;
    text-decoration: underline;
    :nth-of-type(2) {
        margin-top: 20px;
    }
`;

export default function SectionHeading({sectionTitle}) {
    return(
        <Heading>{sectionTitle}</Heading>
    );
};