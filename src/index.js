import React from 'react';
import ReactDOM from 'react-dom';

import Button from './inline/Button';

const App = () => (
  <div>
    <Button>Styled Button</Button>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
