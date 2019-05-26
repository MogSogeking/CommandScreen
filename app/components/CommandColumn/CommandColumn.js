import React, { Component } from 'react'

import styles from './CommandColumn.css'
import ProductDescription from '../ProductDescription/ProductDescriptionContainer';
import CommandSummary from '../CommandSummary/CommandSummaryContainer';
import CommandValidation from '../CommandValidation/CommandValidationContainer';

type Props = {

};

export default class CommandColumn extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <CommandSummary />
        <ProductDescription />
        <CommandValidation />
      </div>
    )
  }
}