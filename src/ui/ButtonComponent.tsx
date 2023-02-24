import React from 'react';
import styled from 'styled-components';


const Button = styled('button')<{bgColor?: string}>`
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border-radius: 10px;
    color: ${props => props.theme.text};
    background-color: ${props => (props.bgColor) ? props.theme[props.bgColor] : props.theme.primary};
    :hover {
        cursor: pointer;
    }
`;

interface IProps {
    text: string,
    bgColor?: string,
    onHandle: (active: boolean) => void;
}


const ButtonComponent:React.FC<IProps> = ({text, onHandle, bgColor}) => {
    const onHandleClick = () => {
        onHandle(true);
    }
    return (
        <Button onClick={onHandleClick} bgColor={bgColor}>
            {text}
        </Button>
    )
}

export default ButtonComponent;
