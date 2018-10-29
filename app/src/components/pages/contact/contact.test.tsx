import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Contacts from './contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contacts value=''/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
 