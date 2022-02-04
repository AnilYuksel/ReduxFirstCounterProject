import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseOneCounter  } from '../redux/actions/counterActions';

 class IncreaseCounter extends Component {
  render() {
    return (
    <div>
      <button onClick={event=>{
        this.props.dispatch(increaseOneCounter())
      }}>Increase One</button>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseOneCounter,dispatch)}
}


export default connect(mapDispatchToProps)(IncreaseCounter)