import React from 'react';
import styled from 'styled-components';
import fromTheme from '../theme';

const EmployeeRecordContainer = styled.div`
    font-size: ${fromTheme('normalSize')},
    text-align: left;
`;

const CompanyAndDateSection = styled.div`
    display: flex;
    font-weight: bold;
    margin-top: 20px;
`;

const Company = styled.div`
    margin-right: auto;
`;

const DateRange = styled.div`
    margin-left: auto;  
`;

const TitleContainer = styled.div`
    display: flex;
    font-weight: bold;
`;

const Title = styled.div`
    margin-right: auto;
`;

export default function EmploymentRecord({record}) {
    return(
        <EmployeeRecordContainer>
            <CompanyAndDateSection>
                <Company>{record.company}</Company>
                <DateRange>{record.dateRange}</DateRange>
            </CompanyAndDateSection>
            <TitleContainer>
                <Title>{record.title}</Title>
            </TitleContainer>
            <ul>
                {record.duties.map((duty, index)=>{
                    return(
                        <React.Fragment key={index}>
                            <li>{duty.description}</li>
                            <ul>
                                {duty.subduties && duty.subduties.map((subDuty, index) => 
                                    <li key={index}>{subDuty.description}</li>
                                )}
                            </ul>   
                        </React.Fragment>
                    );
                })}
            </ul>
        </EmployeeRecordContainer>
    );
};