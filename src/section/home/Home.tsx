import CustomButton from '../../component/button/CustomButton';
import styled from 'styled-components';

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Title = styled.p`
  color: #71B1C5;
  font-weight: bold;
  font-size: 1.25rem;
`;

const Home = () => {
  return (
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-6 pe-sm-5">
        <img src="/sticker.png" alt="me with my cat on the laptop" className="img-fluid"/>
      </div>
      <div className="col-12 col-sm-6 text-start align-self-center">
        <p className='mb-0'>CIAO! I'M</p>
        <Name>Terence Lim</Name>
        <Title>FULL STACK ENGINEER + DESIGN THINKING PRACTITIONER</Title>
        <p>Professional full stack engineer with user centered design thinking & prototyping skills based in Singapore.</p>
        <CustomButton className="mb-5 mb-sm-0">More about me</CustomButton>
      </div>
    </div>
  </div>
  );
}

export default Home;