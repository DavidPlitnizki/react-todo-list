import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './coponents/Header';
import { colors } from './styles/colors';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const theme = {
  ...colors
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
