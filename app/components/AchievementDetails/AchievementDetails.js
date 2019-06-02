import React, { Component } from 'react'
import styles from './AchievementDetails.css'

type Props = {
  achievement: Object
}

export default class AchievementDetails extends Component<Props> {
  props: Props

  render() {
    const { achievement } = this.props
    if(!achievement.id) {
      return null
    }
    const isHidden = achievement.isSecret && !achievement.isCompleted
    const obtainMessage = isHidden ? '' : achievement.isCompleted ? 'Obtenu le :' : 'Progression :'
    return(
      <div className={styles.container}>
        <div className={styles.description}>
          <h3>{achievement.title}</h3>
          <h4>{isHidden ? '???' : achievement.subtitle}</h4>
          <p>{isHidden ? '???' : achievement.description}</p>
        </div>
        <div className={styles.advancement}>
          <p className={styles.gift}>Récompense : {isHidden ? '???' : 'Ma bite'}</p>
          <p className={styles.obtain}>{obtainMessage}</p>
        </div>
      </div>
    )
  }
}

