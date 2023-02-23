import React from 'react';
import ContainerSpaceBetween from '../ui/ContainerSpaceBetween';
import Container from '../ui/FlexContainer';

const Header:React.FC = () => (
   <Container className='header-wrapper'>
    <ContainerSpaceBetween>
        <div>add task</div>
        <div>search</div>
        <div>sort</div>
    </ContainerSpaceBetween>
   </Container>
)

export default Header;