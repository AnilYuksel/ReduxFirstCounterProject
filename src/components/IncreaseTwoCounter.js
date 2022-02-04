import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseTwoCounter  } from '../redux/actions/counterActions';

class IncreaseTwoCounter extends Component {
  render() {
    return (<div><button onClick={event=>{
      this.props.dispatch(increaseTwoCounter())
    }}>Increase Two</button></div>);
  }
}


function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseTwoCounter,dispatch)}
}


export default connect(mapDispatchToProps)(IncreaseTwoCounter)
