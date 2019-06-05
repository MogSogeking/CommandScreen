import React, { Component } from 'react'
import styles from './RankingItem.css'

type Props = {
  profile: object,
  display: String,
  achievementsTotal: Number,
};

export default class RankingItem extends Component<Props> {
  props: Props;

  render() {
    const { profile, display, achievementsTotal } = this.props
    let formattedDisplay
    if(display === 'level') {
      formattedDisplay = `Lv.${profile.level} Exp: ${profile.experience}`
    } else if(display === 'achievements') {
      formattedDisplay = `${profile.achievements.length * 100 / achievementsTotal}% ${profile.achievements.length}/${achievementsTotal}`
    } else if(display === 'fame') {
      formattedDisplay = `${profile.fame} fame`
    } else {
      formattedDisplay = `${profile.level}`
    }
    return (
      <div className={styles.container}>
        <h3>{profile.pseudo} {formattedDisplay}</h3>
      </div>
    )
  }
}