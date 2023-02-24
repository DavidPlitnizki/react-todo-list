import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 4rem;
  /* background-color: ${props => props.theme.bg}; */
  color: ${props => props.theme.text};
`;

interface IProps {
    children: React.ReactNode
    className?: string
}

const FlexContainer:React.FC<IProps> = ({children, className}) => {
    return (
        <ContainerWrapper className={className}>
            {children}
        </ContainerWrapper>
    )   
}
export default FlexContainer;
