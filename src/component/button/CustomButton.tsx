import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const CustomButton = styled(Button)`
  background-color: #71B1C5;
  border-color: #71B1C5;
  &:hover {
    background-color: #003366;
    border-color: #003366;
  }
  &:not(:disabled):not(:hover) {
    background-color: #71B1C5;
    border-color: #71B1C5;
  }
`;

export default CustomButton;