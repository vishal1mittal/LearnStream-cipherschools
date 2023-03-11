import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/TopPanel.css'
import { useState } from 'react';

function TopPanel() {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="brandLogo">
          LS
        </Navbar.Brand>
        <Nav href="#action1" className="brandName">
          LearnStream
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>

          {showNotification && <div className="notification"><i className="fa-solid fa-circle-info"></i> You have a new notification!</div>}
          <div className="notification-icon" onClick={toggleNotification}>
            <i className="fa-solid fa-bell"></i>
          </div>
          

          <Nav.Link href="#action2" className="links">
            Login
          </Nav.Link>
          <Nav.Link href="#" className="links">
            Signup
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopPanel;
