import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <header className="w-100 sticky">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/launchpad">
            <img className="d-inline-block align-top" alt="logo" src="/assets/img/launch/logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/launchpad">Launchpad</Nav.Link>
              <Nav.Link href="/launchpool">Launchpool</Nav.Link>
              <Nav.Link href="/github">Github</Nav.Link>
              <Nav.Link href="/document">Document</Nav.Link>
              <Nav.Link href="/audit">Audit</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button variant="primary" className="btn-connect-wallet">
            <img className="btn--icon" src="/assets/icons/icon-wallet.svg" /> Connect wallet
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
