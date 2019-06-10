import React, { Component } from 'react'
import styles from './RankingItem.css'

type Props = {
  profile: object,
  display: String,
  achievementsTotal: Number,
  index: Number,
  loggedProfile: Boolean,
};

export default class RankingItem extends Component<Props> {
  props: Props;

  render() {
    const { profile, display, achievementsTotal, index, loggedProfile } = this.props
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
      <div className={loggedProfile ? styles.logged : styles.container}>
        {index} {profile.pseudo} {formattedDisplay}
      </div>
    )
  }
}