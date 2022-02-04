import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decreaseOneCounter  } from '../redux/actions/counterActions';

class DecreaseCounter extends Component {
  render() {
    return (<div><button onClick={event=>{
      this.props.dispatch(decreaseOneCounter())
    }}>Decrease One</button></div>);
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(decreaseOneCounter,dispatch)}
}


export default connect(mapDispatchToProps)(DecreaseCounter)