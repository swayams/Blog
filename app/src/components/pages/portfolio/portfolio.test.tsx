import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Portfolio from './portfolio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio projects='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
 