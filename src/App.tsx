import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Container>Home</Container>
  )
}

export default App;
