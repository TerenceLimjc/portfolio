import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const TransparentNavbar = styled(Navbar)`
  background: rgba(240, 240, 240, 1);
`;

const CustomDiv = styled.div`
  background: rgba(240, 240, 240, 1);
  color: rgba(0,0,0,.55);
`;

const CustomNavLink = styled(Nav.Link)`
  &.active {
    color: #003366!important;
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <>
      <TransparentNavbar expand>
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/brand.jpg"
              height="38"
              className="d-inline-block align-top"
              alt="Terence brand logo"
            />
          </Navbar.Brand>
          <Navbar.Text className='d-none d-sm-block'>&#x24B8; Copyright {new Date().getFullYear()}. All rights reserved.</Navbar.Text>
          <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
            <Nav className="ms-auto" defaultActiveKey="#home">
              <CustomNavLink href="https://www.linkedin.com/in/limjcterence/" target="_blank">
                <img src="/linkedin.png" alt="LinkedIn" height="18"/>
              </CustomNavLink>
              <CustomNavLink href="https://www.instagram.com/terenceljc/" target="_blank">
                <img src="/instagram.png" alt="Instagram" height="18"/>
              </CustomNavLink>
              <CustomNavLink href="https://wa.me/+6581275109" target="_blank">
                <img src="/whatsapp.png" alt="Whatsapp" height="23"/>
              </CustomNavLink>
              <CustomNavLink href="mailto: terencelimjc@gmail.com" target="_blank">
                <img src="/gmail.png" alt="Gmail" height="18"/>
              </CustomNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </TransparentNavbar>
      <CustomDiv className='w-100 d-sm-none'>
        <p className='mb-0 pb-4'>&#x24B8; Copyright {new Date().getFullYear()}. All rights reserved.</p>
      </CustomDiv>
    </>
  )
}

export default Footer;