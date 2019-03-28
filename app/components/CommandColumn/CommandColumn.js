import React, { Component } from 'react'

import styles from './CommandColumn.css'
import ProductDescription from '../ProductDescription/ProductDescriptionContainer';
import CommandSummary from '../CommandSummary/CommandSummary';

type Props = {

}

export default class CommandColumn extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <CommandSummary />
        <ProductDescription />
        <div>Valider</div>
      </div>
    )
  }
}