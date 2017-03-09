import React from 'react';
import ReactDOM from 'react-dom';
import baconipsum from 'baconipsum';
import { ThemeProvider } from 'styled-components';

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
import FancyLink from './styled-components/FancyLink';
import theme from './styled-components/theme';

const App = () => (
  <div>
    {/* Can be styled by each included styling library (change imports above): */}
    <Button>Styled Button</Button>
    <hr/>
    {/* Try adding 'alternate' attribute: */}
    <Logo spin/>
    <hr/>
    {/* Try changing the 'theme' attribute to 'theme.light': */}
    <ThemeProvider theme={theme.dark}>
      <Post>
        {baconipsum(50)}
      </Post>
    </ThemeProvider>
    <hr/>
    {/* Won't actually work (see console error on click): */}
    <FancyLink to="">Home</FancyLink>
    <hr/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
