// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { checkProfile } from '../../../redux/actions/global'
import { isValidProfile } from '../../../redux/selectors/global'

const mapStateToProps = state => ({
  isValidProfile: isValidProfile(state),
})

const mapDispatchToProps = dispatch => ({
  checkProfile: cardUid => dispatch(checkProfile(cardUid)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);