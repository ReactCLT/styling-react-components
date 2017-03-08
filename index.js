import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import baconipsum from 'baconipsum';

import Button
  from './vanilla/Button';
  // from './inline/Button';
  // from './css-modules/Button';
  // from './radium/Button';
  // from './aphrodite/Button';
  // from './styled-components/Button';

import './styled-components/global';

import Logo from './styled-components/Logo';
import Post from './styled-components/Post';
import theme from './styled-components/theme';

const App = () => (
  <div>
    <Button>Styled Button</Button>
    <hr/>
    <Logo spin/>
    <hr/>
    <ThemeProvider theme={theme.dark}>
      <Post>
        {baconipsum(50)}
      </Post>
    </ThemeProvider>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
