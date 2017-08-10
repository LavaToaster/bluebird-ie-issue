import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submit } from './redux';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.submit}
        disabled={this.props.isLoading}
        className={this.props.isLoading ? 'spin' : ''}
      >
        Click Me
      </button>
    );
  }
}

export default connect(
  (state) => ({isLoading: state.button.loading}),
  (dispatch) => bindActionCreators({submit}, dispatch),
)(Button);
