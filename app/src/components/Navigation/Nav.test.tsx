import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Navigation from './Nav';

const Links = ["test1", "test2", "test3" ]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation links={Links} />, div);
  ReactDOM.unmountComponentAtNode(div);
})