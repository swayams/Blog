import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';



it('renders without crashing', () => {
  
  const div = document.createElement('div');
  ReactDOM.render(<Router initialEntries={["/stack/2"]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
 