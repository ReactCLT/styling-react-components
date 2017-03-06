import styled from 'styled-components';

const color = '#00DDFF';
const accent = '#070709';

const Button = styled.button`
  background: ${accent};
  border: 0.1em solid ${color};
  border-radius: 0.25em;
  color: ${color};
  font-family: 'Open Sans';
  font-size: 1.5em;
  padding: 0.5em 1em;

  &:hover {
    background: ${color};
    color: ${accent};
  }
`;

export default Button;
