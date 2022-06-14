import styled from 'styled-components';

const TitleText = styled.h3`
  padding: 1rem;
  border-top: 0.5rem solid #71B1C5;
  border-bottom: 0.5rem solid #71B1C5;
  border-radius: 0.5rem;
  color: #71B1C5;
  font-weight: bold;
`;

const Title = ({ 
  text 
} : {
  text: string;
}) => {
  return (
    <TitleText className='mt-5 mb-4 mb-sm-5'>{text}</TitleText>
  )
};

export default Title;