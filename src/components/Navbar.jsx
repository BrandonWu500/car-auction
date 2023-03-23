import {
  Container,
  Nav,
  Navbar as NavbarBS,
  NavDropdown,
} from 'react-bootstrap';

import carItems from '../data/cars.json';

const Navbar = () => {
  return (
    <NavbarBS sticky="top" className="bg-primary" style={{ height: '100px' }}>
      <Container>
        <NavDropdown
          title="CARS"
          id="basic-nav-dropdown"
          className="text-light fs-3"
        >
          {carItems.map((car) => (
            <>
              <NavDropdown.Item href={`#car${car.id}`}>
                {car.name}
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </>
          ))}
        </NavDropdown>
        <NavbarBS.Brand
          href="/"
          className="text-light text-uppercase ms-auto fs-1"
        >
          Car Auction
        </NavbarBS.Brand>
        <Nav className="ms-auto fs-5 gap-3">
          <Nav.Link href="#home" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-light">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="text-light">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBS>
  );
};
export default Navbar;
