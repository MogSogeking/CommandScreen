// @flow
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalBar from '@material-ui/icons/LocalBar'
import LocalDrink from '@material-ui/icons/LocalDrink'
import LocalCafe from '@material-ui/icons/LocalCafe'
import Restaurant from '@material-ui/icons/Restaurant'
import Fastfood from '@material-ui/icons/Fastfood'
import styles from './CommandTabs.css';

type Props = {
  products: object,
};

export default class CommandTabs extends Component<Props> {
  props: Props;

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state;
    return (
      <div className={styles.container}>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Boissons alcoolisées" icon={<LocalBar />} />
          <Tab label="Boissons soft" icon={<LocalDrink />} />
          <Tab label="Boissons chaudes" icon={<LocalCafe />} />
          <Tab label="Repas" icon={<Restaurant />} />
          <Tab label="Snacks" icon={<Fastfood />} />
        </Tabs>
      {value === 0 && <div>Item One</div>}
      {value === 1 && <div>Item Two</div>}
      {value === 2 && <div>Item Three</div>}
      </div>
    );
  }
}
