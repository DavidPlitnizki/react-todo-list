import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../ui/FlexContainer';
import ContainerCenter from '../ui/ContainerCenter';


const ListWrapper = styled(FlexContainer)`
    height: 10vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.bg};
`;

const ListContentWrapper = styled(ContainerCenter)`
    width: 60%;
    margin: auto 0;
`;

interface IProps {
    list: React.ReactNode
}

const List:React.FC<IProps> = ({list}) => {
    console.log("list: ", list)
    return (
        <ListWrapper>
            <ListContentWrapper>
                {list}
            </ListContentWrapper>
        </ListWrapper>
    )
}

export default List;