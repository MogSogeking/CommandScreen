import React, { Component } from 'react'
import styles from './MoneyLine.css'

type Props = {
  profile: Object,
}

export default class MoneyLine extends Component<Props> {
  props: Props

  render() {
    const { profile } = this.props
    return (
      <div className={styles.container}>
        <p className={styles.textLeft}>Crédits: {profile.credits}cr.</p>
        <p className={styles.textRight}>Solde: {profile.money}€</p>
      </div>
    )
  }
}