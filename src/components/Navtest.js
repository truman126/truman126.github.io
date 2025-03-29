import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { HashRouter ,Route, Switch , Routes, Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navigation() {
  return (

    
    
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">

          <Container>
          <HashRouter>

            <Navbar.Brand as={HashLink} to="/#home">Truman</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav className="me-auto">

                <Nav.Link as={HashLink} to="/#home" reloadDocument>Home</Nav.Link>
                <Nav.Link as={HashLink} smooth to="/#awards" reloadDocument>Awards and Certifications</Nav.Link>
                <Nav.Link as={HashLink} smooth to="/#skills"reloadDocument>Skills</Nav.Link>
                <Nav.Link as={HashLink} smooth to="/#projects"reloadDocument>Projects</Nav.Link>
                <Nav.Link as={HashLink} to="/wallpaperengine" reloadDocument>Wallpaper Engine<Badge bg="danger">New</Badge></Nav.Link>
                  
              </Nav>
            </Navbar.Collapse>
            </HashRouter>

          </Container>
         
        </Navbar>

  );
}

export default Navigation;