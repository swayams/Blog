import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Portfolio from '../Portfolio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio projects='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
