import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Experience from './experience';

it('renders without crashing', () => {
  const exp = [{id:1}, {id:2}]
  const div = document.createElement('div');
  ReactDOM.render(<Experience experiences={exp} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
