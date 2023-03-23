import styled from 'styled-components';
import CarList from './components/CarList';
import Navbar from './components/Navbar';

const Container = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Navbar />
      <CarList />
    </Container>
  );
}

export default App;
