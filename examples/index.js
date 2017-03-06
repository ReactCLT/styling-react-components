import React from 'react';
import ReactDOM from 'react-dom';

// uncomment the line of the example you would like to see:

import Button
  from './vanilla/Button';
  // from './inline/Button';
  // from './css-modules/Button';
  // from './radium/Button';
  // from './aphrodite/Button';
  // from './styled-components/Button';


const App = () => (
  <div>
    <Button>Styled Button</Button>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
