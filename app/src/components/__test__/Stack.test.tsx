import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Stack from '../Stack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stack match='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
