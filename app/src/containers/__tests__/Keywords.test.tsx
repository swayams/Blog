import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';;
import Keywords from '../Keywords';

it('renders without crashing', () => {
  const objArr = [
    {a: 1},
    {b: 2}
  ]

  const div = document.createElement('div');
  ReactDOM.render(<Router><Keywords keywords={objArr} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
