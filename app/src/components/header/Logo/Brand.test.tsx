import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Brand from './Brand';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Brand  img='' name='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
