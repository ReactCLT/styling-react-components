import React from 'react';
import ReactDOM from 'react-dom';

import Button
  from './vanilla/Button';
  // from './inline/Button';
  // from './css-modules/Button';
  // from './radium/Button';
  // from './aphrodite/Button';
  // from './styled-components/Button';

import Divider from './styled-components/Divider';

const App = () => (
  <div>
    <Button>Styled Button</Button>
    <Divider/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
