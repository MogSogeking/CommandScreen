import React, { Component } from 'react'
import styles from './AchievementsPage.css'
import BackButton from '../../BackButton/BackButton'
import LogoutButton from '../../LogoutButton/LogoutButtonContainer'
import AchievementsTabs from '../../AchievementsTabs/AchievementsTabsContainer'
import AchievementDetails from '../../AchievementDetails/AchievementDetailsContainer'

type Props = {
  purgeAchievement: () => {}
}

export default class AchievementsPage extends Component<Props> {
  props: Props

  render() {
    const { purgeAchievement } = this.props
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.header}>
          <BackButton redirection={'/extras'} click={purgeAchievement}/>
          <h2 className={styles.titlebar}>Achievements</h2>
        </div>
        <div className={styles.mainBlock}>
          <AchievementsTabs />
          <AchievementDetails />
        </div>
        <LogoutButton />
      </div>
    );
  }
}