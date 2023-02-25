import React from 'react';
import styled from 'styled-components';
import ContainerCenter from '../ui/ContainerCenter';


const ListWrapper = styled(ContainerCenter)`
    height: 10vh;
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