import React from 'react';
import styled from 'styled-components';

const Centering = styled('div')<{paddingSide?: boolean, bgColor?: string}>`
    position: relative;
    width: 100%;
    max-width: 1024px;
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

const ContainerContent:React.FC<IProps> = ({children, className, bgColor}) => {
    return (
        <Centering className={className} paddingSide bgColor={bgColor}>
            {children}
        </Centering>
    )   
}
export default ContainerContent;
