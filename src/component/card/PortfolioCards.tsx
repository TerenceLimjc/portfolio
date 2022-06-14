import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';

const CustomCards = styled(Carousel.Caption)`
  background-color: rgba(0,0,0,0.75); 
  padding-left: 1rem;
  padding-right: 1rem;
`;

const PortfolioCards = () => {
 return (
   <>
    <Carousel className='d-none d-sm-block w-75 mx-auto mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="insurance-digital-landscape.png"
          alt="Digital transformation of insurance"
        />
        <CustomCards>
          <h3>Digital Platform @ Prudential</h3>
          <p>Direct-2-Consumer platform for Insurance products. Made with AngularJS, ReactJS, SASS, Java 8, Springboot & Oracle DB</p>
          <p>Live website at <a href='https://buy.prudential.com.sg/d2c/ps_entry' target="_blank" rel="noreferrer">https://buy.prudential.com.sg/d2c/ps_entry</a></p>
        </CustomCards>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="shopform-landscape.png"
          alt="Shopform commerce"
        />
        <CustomCards>
          <h3>Mobile App @ Shopform</h3>
          <p>Founded startup & led product development along with design. Developed with Flutter, NodeJS, Azure Cloud Services & MySQL</p>
        </CustomCards>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="autojot-landscape.jpg"
          alt="Usability testing"
        />
        <CustomCards>
          <h3>Autojot @ Objective Eye Tracking</h3>
          <p>Mobile app made to transcribe and assist with usability testing. Made with Ionic Framework, ReactJS, .NET Core, PHP & MySQL</p>
        </CustomCards>
      </Carousel.Item>
    </Carousel>
    <Row xs={1} className="g-4 d-sm-none mb-5">
        <Col>
          <Card>
            <Card.Img variant="top" src="insurance-digital-square.png" />
            <Card.Body>
              <Card.Title>Digital Platform @ Prudential</Card.Title>
              <Card.Text>
                Direct-2-Consumer platform for Insurance products. Made with AngularJS, ReactJS, SASS, Java 8, Springboot & Oracle DB
                <br/>
                Live website at <a href='https://buy.prudential.com.sg/d2c/ps_entry' target="_blank" rel="noreferrer">https://buy.prudential.com.sg/d2c/ps_entry</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="shopform-square.png" />
            <Card.Body>
              <Card.Title>Mobile App @ Shopform</Card.Title>
              <Card.Text>
                Led product development & designs. Developed with Flutter, NodeJS, Azure Cloud Services & MySQL
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="autojot-square.jpg" />
            <Card.Body>
              <Card.Title>Autojot @ Objective Eye Tracking</Card.Title>
              <Card.Text>
                Mobile app made to transcribe and assist with usability testing. Made with Ionic Framework, ReactJS, .NET Core, PHP & MySQL
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
   </>
 );
};

export default PortfolioCards;