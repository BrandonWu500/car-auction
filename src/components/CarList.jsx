import { Container } from 'react-bootstrap';
import carItems from '../data/cars.json';
import CarItem from './CarItem';

const CarList = () => {
  return (
    <Container>
      {carItems.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </Container>
  );
};
export default CarList;
