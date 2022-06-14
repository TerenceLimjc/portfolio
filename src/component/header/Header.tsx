import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const TransparentNavbar = styled(Navbar)`
  background: rgba(240, 240, 240, .7);
`;

const CustomNavLink = styled(Nav.Link)`
  padding-left: 1rem!important;
  padding-right: 1rem!important;
  text-decoration: none;
  &.active {
    color: #003366!important;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <TransparentNavbar expand="sm" fixed="top">
      <Container>
        <Navbar.Brand href="#top">
          <img
            src="/brand.png"
            height="38"
            className="d-inline-block align-top"
            alt="Terence brand logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey={"#home"}>
            <CustomNavLink href="#home">Home</CustomNavLink>
            <CustomNavLink href="#about">About</CustomNavLink>
            <CustomNavLink href="#portfolio">Portfolio</CustomNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </TransparentNavbar>
  );
}

export default Header;