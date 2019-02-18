import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

import Firebase, {FirebaseContext} from './.firebase/index';
import Auth from './components/Auth';

const firebase = new Firebase()


ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <Auth authMethod={firebase.doSignInWithGoogle} />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
