import React from 'react';
import styled from 'styled-components';

const Centering = styled('div')<{paddingSide?: boolean, bgColor?: string}>`
    position: relative;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.paddingSide ? '0 2rem' : 0};
    background-color: ${props => (props.bgColor) ? props.bgColor : 'none'};
`;

interface IProps {
    children: React.ReactNode
    className?: string
    bgColor?: string
}

const ContainerCenter:React.FC<IProps> = ({children, className, bgColor}) => {
    return (
        <Centering className={className} paddingSide bgColor={bgColor}>
            {children}
        </Centering>
    )   
}
export default ContainerCenter;
