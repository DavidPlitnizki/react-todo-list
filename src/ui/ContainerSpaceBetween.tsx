import React from 'react';
import styled from 'styled-components';
import Container from './FlexContainer';

const SpaceBetween = styled(Container)<{paddingSide?: boolean}>`
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.paddingSide ? '0 2rem' : 0};
`;

interface IProps {
    children: React.ReactNode
    className?: string
}

const ContainerSpaceBetween:React.FC<IProps> = ({children, className}) => {
    return (
        <SpaceBetween className={className} paddingSide>
            {children}
        </SpaceBetween>
    )   
}
export default ContainerSpaceBetween;
