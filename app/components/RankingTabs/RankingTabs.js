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
    console.log(profiles)
    const categoryValue = ['global', 'level', 'achievements', 'fame']

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
        return 0
      } else if(categoryValue[value] === 'achievements') {
        if(a.achievements.length > b.achievements.length) {
          return -1
        } else if(a.achievements.length < b.achievements.length) {
          return 1
        } else {
          return 0
        }
      } else if(categoryValue[value] === 'fame') {
        if(a.fame > b.fame) {
          return -1
        } else if(a.fame < b.fame) {
          return 1
        } else {
          return 0
        }
      }
    })
    return sortedProfiles.map(item => <RankingItem key={item.id} profile={item} display={categoryValue[value]} />)
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
