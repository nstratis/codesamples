/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import { hideAlert } from '../../actions/alert';

class PanelAlert extends Component {
  static propTypes = {
    active: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string
  }

  handleClick = (e) => {
    this.props.hideAlert();
  }

  render() {
    const { active, title, message } = this.props;
    if (!active) {
      return null;
    }
    return (<div id="alert-modal" className="modal-layer visible">
      <div className="panel">
        <header className="panel-hdr">
          <h1>{title}</h1>
        </header>
        <div className="panel-stn">
          <p>{message}</p>
        </div>
        <div className="panel-bt">
          <Button label="OK" onClick={this.handleClick}/>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.isAlert.active,
  title: state.isAlert.title,
  message: state.isAlert.message
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideAlert: () => dispatch(hideAlert())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelAlert);
