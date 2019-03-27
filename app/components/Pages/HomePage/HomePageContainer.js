// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';


function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(HomePage);