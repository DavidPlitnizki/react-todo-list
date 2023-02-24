import React from 'react';
import styled from 'styled-components';
import Container from './FlexContainer';

const Centering = styled(Container)<{paddingSide?: boolean}>`
  justify-content: center;
  align-items: center;
  padding: ${props => props.paddingSide ? '0 2rem' : 0};
`;

interface IProps {
    children: React.ReactNode
    className?: string
}

const ContainerCenter:React.FC<IProps> = ({children, className}) => {
    return (
        <Centering className={className} paddingSide>
            {children}
        </Centering>
    )   
}
export default ContainerCenter;
