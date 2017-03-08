import styled from 'styled-components';

const Post = styled.p`
  font-family: 'Open Sans';
  padding: 1.5em;
  text-align: justify;
  width: 25em;
  color: ${props => props.theme.foreground};
  background: ${props => props.theme.background};
`;

export default Post;
