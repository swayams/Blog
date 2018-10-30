import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';


const Links = ["test1", "test2", "test3" ]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Navigation links={Links} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
})