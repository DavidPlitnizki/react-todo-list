import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './coponents/Header';
import { colors } from './styles/colors';
import TaskModal from './coponents/Modal';
import Main from './coponents/Main';
import CssBaseline from '@mui/material/CssBaseline';


const Layout = styled.div`
  /* display: flex;
  flex-direction: column;
  height: 100vh; */
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
      <Layout>
        <Header onOpenTaskModal={setIsOpenTaskModal} />
        <Main />
      </Layout>
      <TaskModal isOpen={isOpenTaskModal} oncloseModal={setIsOpenTaskModal} />
    </ThemeProvider>
    </>
  )
}

export default App;
