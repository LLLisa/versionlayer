import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import store from './store';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
            <Main />
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Root />);
