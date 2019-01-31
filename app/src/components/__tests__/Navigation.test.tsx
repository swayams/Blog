import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';


const links = [
  {href: 'test1', name: 'test1'},
  {href: 'test2', name: 'test2'},
  {href: 'test3', name: 'test3'}
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Navigation links={links} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
})