import './Navs.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {WhiteButton} from '../../Component/Buttons/Buttons';


const Navs = () => {
    return (

  <Navbar bg="#232536" expand="lg">
    <Container>
  <Navbar.Brand href="/home">Finsweet</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Blog">Blog</Nav.Link>
      <Nav.Link href="/AboutUs">About Us</Nav.Link>
      <Nav.Link href="/ContactUs">Contact us</Nav.Link>
    </Nav>
    <WhiteButton>Subscrip</WhiteButton>
  </Navbar.Collapse>
  </Container>
</Navbar>
      

    );
}

export default Navs;
  