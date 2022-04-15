import React from 'react';
import { connect } from 'react-redux';
import { setView } from './store';

class Gate extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    this.props.setView(this.state.password);
    this.setState({ password: '' });
    ev.target.focus();
    console.log(window.localStorage);
  }

  render() {
    return (
      <div>
        <div>we are in the version layer</div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            autoFocus
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          ></input>
          <button>.</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setView: (password) => {
      return dispatch(setView(password));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Gate);
