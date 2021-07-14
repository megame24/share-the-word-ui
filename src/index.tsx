import React from 'react';
import { render } from 'react-dom';

import './style.scss';

const App = () => (
  <div className="greeting">
    <p>Hello and welcome!!</p>
  </div>
);

render(
  <App />,
  document.getElementById('root'),
);
