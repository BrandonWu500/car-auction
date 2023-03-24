import styled from 'styled-components';
import About from './components/About';
import CarList from './components/CarList';
import Contact from './components/Contact';
import Hero from './components/Hero';
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
      <Hero />
      <About />
      <CarList />
      <Contact />
    </Container>
  );
}

export default App;
