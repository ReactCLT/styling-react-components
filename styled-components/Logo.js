import styled, { keyframes } from 'styled-components';

const size = '9em';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Try these:

// <Logo spin/>
// <Logo alternate/>
// <Logo spin alternate/>

const Logo = styled.div`
  display: inline-block;
  width: ${size};
  height: ${size};
  background-image: url(logo.svg);
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100%;
  background-color: ${props => props.alternate ? 'white' : null};
  animation: ${props => props.spin ? `${spin} 5s infinite linear` : null};
`;

export default Logo;
