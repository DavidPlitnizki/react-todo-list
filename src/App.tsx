import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import TaskModal from './components/Modal';
import Main from './pages/Main';
import { colors } from './styles/colors';


const Layout = styled.div`
  height: 100dvh;
  max-width: 100%;
`;

const theme = {
  ...colors
};



const App: React.FC = () => {
const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);

  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Layout className='layout-component'>
        <Header onOpenTaskModal={setIsOpenTaskModal} />
        <Main />
      </Layout>
      <TaskModal isOpen={isOpenTaskModal} oncloseModal={setIsOpenTaskModal} />
    </ThemeProvider>
    </>
  )
}

export default App;
