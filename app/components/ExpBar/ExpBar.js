import React, { Component } from 'react'
import styles from './ExpBar.css'
import { computeRequiredExp } from '../../utils/utils';

type Props = {
  profile: Object,
}

export default class ExpBar extends Component<Props> {
  props: Props

  render() {
    /*let sum = 0;
    for(let i = 1 ; i < 101 ; i++) {
      sum += computeRequiredExp(i)
      console.log(computeRequiredExp(i))
    }
    console.log(sum)*/
    const { profile } = this.props
    const percents = `${100*profile.experience / computeRequiredExp(profile.level)}%`
    const width = { width: percents }
    return (
      <div className={styles.container}>
        <div className={styles.backgroundBar}>
          <div className={styles.foregroundBar} style={width}></div>
        </div>
        <div className={styles.details}>Level: {profile.level}</div>
      </div>
    )
  }
}