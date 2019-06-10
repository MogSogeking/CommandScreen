// @flow
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './RankingTabs.css';
import RankingItem from '../RankingItem/RankingItemContainer'

type Props = {
  profiles: object,
  profile: Object,
};

export default class RankingTabs extends Component<Props> {
  props: Props;

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value })
  }

  renderProfiles = (value) => {
    const { profiles } = this.props

    for(let i = 0 ; i < 10 ; i++) {
      profiles.push(
        { pseudo: `a${i}`, experience: 50+Math.round(Math.random()*200), level: 5+Math.round(Math.random()*5), achievements: [1, 2, 3], fame: 10+Math.round(Math.random()*50) },
        { pseudo: `b${i}`, experience: 100+Math.round(Math.random()*200), level: 5+Math.round(Math.random()*5), achievements: [1, 2, 3], fame: 5+Math.round(Math.random()*50) },
        { pseudo: `c${i}`, experience: 150+Math.round(Math.random()*200), level: 5+Math.round(Math.random()*5), achievements: [2, 3], fame: 10+Math.round(Math.random()*50) },
        { pseudo: `d${i}`, experience: 95+Math.round(Math.random()*200), level: 6+Math.round(Math.random()*5), achievements: [1], fame: 20+Math.round(Math.random()*50) },
        { pseudo: `e${i}`, experience: 10+Math.round(Math.random()*200), level: 2+Math.round(Math.random()*5), achievements: [1, 2, 3, 4, 5], fame: 50+Math.round(Math.random()*50) },
        { pseudo: `f${i}`, experience: 200+Math.round(Math.random()*200), level: 8+Math.round(Math.random()*5), achievements: [1], fame: 15+Math.round(Math.random()*50) },
        { pseudo: `g${i}`, experience: 250+Math.round(Math.random()*200), level: 3+Math.round(Math.random()*5), achievements: [1, 3], fame: 20+Math.round(Math.random()*50) },
        { pseudo: `h${i}`, experience: 120+Math.round(Math.random()*200), level: 3+Math.round(Math.random()*5), achievements: [1, 2, 3], fame: 80+Math.round(Math.random()*50) },
        { pseudo: `i${i}`, experience: 120+Math.round(Math.random()*200), level: 3+Math.round(Math.random()*5), achievements: [1, 2, 3], fame: 10+Math.round(Math.random()*50) },
        { pseudo: `j${i}`, experience: 110+Math.round(Math.random()*200), level: 4+Math.round(Math.random()*5), achievements: [1, 2, 3], fame: 15+Math.round(Math.random()*50) },
        { pseudo: `k${i}`, experience: 510+Math.round(Math.random()*200), level: 2+Math.round(Math.random()*5), achievements: [1, 2], fame: 40+Math.round(Math.random()*50) },
        { pseudo: `l${i}`, experience: 210+Math.round(Math.random()*200), level: 4+Math.round(Math.random()*5), achievements: [1, 2, 3, 4], fame: 60+Math.round(Math.random()*50) },
        { pseudo: `m${i}`, experience: 260+Math.round(Math.random()*200), level: 3+Math.round(Math.random()*5), achievements: [1, 2, 3, 4, 5], fame: 100+Math.round(Math.random()*50) },
        { pseudo: `n${i}`, experience: 60+Math.round(Math.random()*200), level: 2+Math.round(Math.random()*5), achievements: [1], fame: 10+Math.round(Math.random()*50) }
      )
    }

    const categoryValue = ['global', 'level', 'achievements', 'fame']

    profiles.forEach(profile => delete profile.isEqual)

    const sortedProfiles = profiles.sort((a, b) => {
      if(categoryValue[value] === 'global') {
        return -1;
      } else if(categoryValue[value] === 'level') {
        if (a.level > b.level) {
          return -1
        } else if (a.level < b.level) {
          return 1
        } else if (a.experience > b.experience) {
          return -1
        } else if (a.experience < b.experience) {
          return 1
        }
        a.isEqual = true
        return -1
      } else if(categoryValue[value] === 'achievements') {
        if(a.achievements.length > b.achievements.length) {
          return -1
        } else if(a.achievements.length < b.achievements.length) {
          return 1
        } else {
          a.isEqual = true
          return -1
        }
      } else if(categoryValue[value] === 'fame') {
        if(a.fame > b.fame) {
          return -1
        } else if(a.fame < b.fame) {
          return 1
        } else {
          a.isEqual = true
          return -1
        }
      }
    })
    let profileItem
    let currentIndex = 1
    let isInRange = false
    const mappedItems = sortedProfiles.map((item, i) => {
      let loggedProfile = false
      if(item._id === this.props.profile._id) {
        loggedProfile = true
        if(i < 100) {
          isInRange = true
        }
        profileItem = <RankingItem key={item.id} profile={item} display={categoryValue[value]} index={currentIndex} loggedProfile={loggedProfile} />
      }
      const returnedItem = <RankingItem key={item.id} profile={item} display={categoryValue[value]} index={currentIndex} loggedProfile={loggedProfile} />

      if(item.isEqual !== true) {
        currentIndex = i+2
      }

      return returnedItem
    })
    let rankedItems
    if(isInRange) {
      rankedItems = mappedItems.slice(0, 100)
    } else {
      rankedItems = mappedItems.slice(0, 99)
      rankedItems.push(profileItem)
      return rankedItems
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Global" />
          <Tab label="Niveau" />
          <Tab label="Achievements" />
          <Tab label="Fame" />
        </Tabs>
        <div className={styles.tabContent}>
          {this.renderProfiles(value)}
        </div>
      </div>
    );
  }
}
