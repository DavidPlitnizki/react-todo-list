import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './coponents/Header';
import { colors } from './styles/colors';
import { ModalProvider } from 'styled-react-modal'
import TaskModal from './coponents/Modal';
import Main from './coponents/Main';


const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const theme = {
  ...colors
};

const App: React.FC = () => {
const [isOpenTaskModal, setIsOpenTaskModal] = useState<boolean>(false);



  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header onOpenTaskModal={setIsOpenTaskModal} />
        <Main />
      </Layout>
      <ModalProvider>
        <TaskModal isOpen={isOpenTaskModal} oncloseModal={setIsOpenTaskModal} />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App;
