import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './AchievementsTabs.css'
import AchievementItem from '../AchievementItem/AchievementItem'

type Props = {
  achievements: object,
}

export class AchievementsTabs extends Component<Props> {
  props: Props

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value })
  }

  renderProducts = (value) => {
    const { achievements } = this.props
    const categoryValue = ['general', 'events']
    return achievements[categoryValue[value]] && achievements[categoryValue[value]].map(item => <AchievementItem key={item.id} product={item} />)
  }

  render() {
    const { value } = this.state

    return (
      <div className={styles.container}>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Général" />
          <Tab label="Événements" />
        </Tabs>
        <div className={styles.tabContent}>
          {this.renderProducts(value)}
        </div>
      </div>
    )
  }
}