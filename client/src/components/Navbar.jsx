import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/BlueTechtonicaWord.png'


function MyNavBar(props) {

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="">
            JSON data:
            {/* Your brand content */}
          </Navbar.Brand>
          
          <Nav.Link href="http://localhost:8080/api/sightings">
            Sightings
          </Nav.Link>

          <Nav.Link href="http://localhost:8080/api/species">
            Species
          </Nav.Link>
          
          <Nav.Link href="http://localhost:8080/api/individualanimals/">
            Individual Animals
          </Nav.Link>

          <Nav.Link href="http://localhost:8080/api/scientists/">
            Scientists 
          </Nav.Link>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


export default MyNavBar;