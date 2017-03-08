import styled from 'styled-components';
import { Link } from 'react-router';

const FancyLink = styled(Link)`
  color: #00DDFF;
  text-decoration: none;
  font-family: 'Open Sans';
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default FancyLink;
