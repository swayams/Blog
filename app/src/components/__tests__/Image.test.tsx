import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Image from '../Image';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image width={10} height={10} altText='' url=''/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
 