import React from 'react';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import Container from '../ui/FlexContainer';
import ButtonComponent from '../ui/ButtonComponent';


interface IProps {
    onOpenTaskModal: (active: boolean) => void;
}

const Header:React.FC<IProps> = ({onOpenTaskModal}) => {
    return (
    <Container className='header-wrapper'>
        <ContainerSpaceBetween>
            <ButtonComponent text='Add Task' onHandle={onOpenTaskModal} />
            <div>search</div>
            <div>sort</div>
        </ContainerSpaceBetween>
    </Container>
    )
}

export default Header;