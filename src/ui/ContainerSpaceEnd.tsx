import React from 'react';
import styled from 'styled-components';

const FlexEnd = styled('div')<{paddingSide?: boolean, bgColor?: string}>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: ${props => props.paddingSide ? '0 2rem' : 0};
    background-color: ${props => (props.bgColor) ? props.bgColor : 'none'};
`;

interface IProps {
    children: React.ReactNode
    className?: string
    bgColor?: string
}

const ContainerSpaceEnd:React.FC<IProps> = ({children, className, bgColor}) => {
    return (
        <FlexEnd className={className} paddingSide bgColor={bgColor}>
            {children}
        </FlexEnd>
    )   
}
export default ContainerSpaceEnd;
