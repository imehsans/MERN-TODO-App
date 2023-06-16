import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
   return (
      <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark bg-dark">
         <Container >
            <Navbar.Brand href="#home">MERN TODO APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#">Tailwind CSS</Nav.Link>
                  <Nav.Link href="#">React-Bootstrap</Nav.Link>
               </Nav>
               <Nav>
                  <Nav.Link href="https://ehsanportfoliosite.netlify.app/">Ehsanullah</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Header;