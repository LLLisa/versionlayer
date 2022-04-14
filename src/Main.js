import React from 'react';
import Gate from './Gate';
import Header from './Header';
import Body from './Body';

class Main extends React.Component {
  render() {
    const { auth } = this.props;
    if (!auth) {
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

export default Main;
