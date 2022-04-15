import React from 'react';
import { connect } from 'react-redux';
import Gate from './Gate';
import Header from './Header';
import Body from './Body';

class Main extends React.Component {
  render() {
    console.log(window.localStorage);
    const { view } = window.localStorage;
    if (view !== 'human') {
      return (
        <div>
          <Gate />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default connect((state) => state)(Main);
