import React, { Component } from 'react'
import styles from './AchievementDetails.css'

type Props = {
  achievement: Object
}

export default class AchievementDetails extends Component<Props> {
  props: Props

  render() {
    const { achievement } = this.props
    return(
      <div className={styles.container}>
        <h3>{achievement.title}</h3>
        <h4>{achievement.subtitle}</h4>
        <p>{achievement.description}</p>
        <div className={styles.advancement}>
          <p>Obtenu le :</p> 
          <p>Récompense :</p>
        </div>
      </div>
    )
  }
}

