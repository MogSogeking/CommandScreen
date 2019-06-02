import React, { Component } from 'react'
import styles from './AchievementItem.css'

type Props = {
  achievement: object,
  selectedAchievement: object,
  selectAchievement: () => {},
}

export default class AchievementItem extends Component<Props> {
  props: Props

  render() {
    const { achievement, selectAchievement, selectedAchievement } = this.props
    const selectedClass = selectedAchievement.id === achievement.id ? styles.selectedContainer : styles.container
    const completedClass = achievement.isCompleted ? styles.unlockedAchievement : styles.lockedAchievement
    const containerClassName = `${selectedClass} ${completedClass}`

    return (
      <div className={containerClassName} onClick={selectAchievement}>
        <img src={achievement.image} />
      </div>
    )
  }
}