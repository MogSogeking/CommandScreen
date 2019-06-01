import React, { Component } from 'react'
import styles from './AchievementsPage.css'
import BackButton from '../../BackButton/BackButton'
import LogoutButton from '../../LogoutButton/LogoutButtonContainer'
import { AchievementsTabs } from '../../AchievementsTabs/AchievementsTabs';


type Props = {

}

export default class AchievementsPage extends Component<Props> {
  props: Props

  render() {
    const achieve = {
      general: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      events: [],
    }
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.header}>
          <BackButton redirection={'/extras'} />
          <h2 className={styles.titlebar}>Achievements</h2>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.command}>
            <AchievementsTabs achievements={achieve} />
          </div>
        </div>
        <LogoutButton />
      </div>
    );
  }
}