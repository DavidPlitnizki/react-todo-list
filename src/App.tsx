import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { colors } from './styles/colors';
import TaskModal from './components/Modal';
import Main from './components/Main';
import CssBaseline from '@mui/material/CssBaseline';


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
