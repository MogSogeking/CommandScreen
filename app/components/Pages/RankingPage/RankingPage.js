import React, { Component } from 'react'
import styles from './RankingPage.css'
import BackButton from '../../BackButton/BackButton'
import LogoutButton from '../../LogoutButton/LogoutButtonContainer'

type Props = {

}

export default class RankingPage extends Component<Props> {
  props: Props

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.header}>
          <BackButton redirection={'/extras'} />
          <h2 className={styles.titlebar}>Ranking</h2>
        </div>
        <div className={styles.mainBlock}>
        </div>
        <LogoutButton />
      </div>
    );
  }
}