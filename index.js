import React from 'react';
import ReactDOM from 'react-dom';

import Button
  from './vanilla/Button';
  // from './inline/Button';
  // from './css-modules/Button';
  // from './radium/Button';
  // from './aphrodite/Button';
  // from './styled-components/Button';

import Logo from './styled-components/Logo';

const App = () => (
  <div>
    <Button>Styled Button</Button>
    <hr/>
    <Logo spin alternate/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
