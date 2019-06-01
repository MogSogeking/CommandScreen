import React, { Component } from 'react'
import styles from './AchievementItem.css'

type Props = {

}

export default class AchievementItem extends Component<Props> {
  props: Props

  render() {
    return (
      <div className={styles.container}>
        <h3>Hi</h3>
      </div>
    )
  }
}