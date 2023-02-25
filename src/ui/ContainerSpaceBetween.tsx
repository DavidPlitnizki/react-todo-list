import React from 'react';
import styled from 'styled-components';

const SpaceBetween = styled('div')<{paddingSide?: boolean, bgColor?: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${props => props.paddingSide ? '0 2rem' : 0};
    background-color: ${props => (props.bgColor) ? props.bgColor : 'none'};
`;

interface IProps {
    children: React.ReactNode
    className?: string
    bgColor?: string
}

const ContainerSpaceBetween:React.FC<IProps> = ({children, className, bgColor}) => {
    return (
        <SpaceBetween className={className} paddingSide bgColor={bgColor}>
            {children}
        </SpaceBetween>
    )   
}
export default ContainerSpaceBetween;
