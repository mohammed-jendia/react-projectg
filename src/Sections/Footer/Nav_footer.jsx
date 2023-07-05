import '../Navs/Navs.css';
import { Navbar, Nav, Container} from 'react-bootstrap';

const NavFooter = () => {
    return (
        <Navbar expand="lg">
        <Container>
      <Navbar.Brand href="/home">Finsweet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Blog">Blog</Nav.Link>
        <Nav.Link href="/AboutUs">About Us</Nav.Link>
        <Nav.Link href="/ContactUs">Contact us</Nav.Link>
        <Nav.Link href="/Privacy">Privacy Policy</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavFooter;
