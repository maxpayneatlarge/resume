import React from 'react';
import styled from 'styled-components';
import data from '../data/header.json'
import fromTheme from '../theme';

const HeaderContainer = styled.div`
    color: ${fromTheme('primaryColor')};
    margin: 0 0 50px 0;
    text-align: center;
`;

const Name = styled.h1`
    font-size: ${fromTheme('heading1Size')};
    margin: 0 0 5px 0;
`;

const Email = styled.h2`
    font-size: ${fromTheme('heading2Size')};
    font-weight: normal;
    margin: 5px 0 5px 0;
`;

export default function Header() {
    return(
        <HeaderContainer>
            <Name>{data.name}</Name>
            <Email>{data.email}</Email>
        </HeaderContainer>
    );
};