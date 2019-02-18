import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';;
import Keywords from '../Keywords';

it('renders without crashing', () => {
  

  const div = document.createElement('div');
  ReactDOM.render(<Router><Keywords /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
