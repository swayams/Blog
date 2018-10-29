import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TextBlock from '../TextBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextBlock content='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
