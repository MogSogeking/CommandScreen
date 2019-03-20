// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fastfood from '@material-ui/icons/Fastfood'
import LocalBar from '@material-ui/icons/LocalBar'
import LocalCafe from '@material-ui/icons/LocalCafe'
import routes from '../../../constants/routes';
import styles from './CommandPage.css';

type Props = {};

export default class CommandPage extends Component<Props> {
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
      <div className={styles.container} data-tid="container">
        <h2>Command</h2>
        <div>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab icon={<Fastfood />} />
            <Tab icon={<LocalBar />} />
            <Tab icon={<LocalCafe />} />
          </Tabs>
        {value === 0 && <div>Item One</div>}
        {value === 1 && <div>Item Two</div>}
        {value === 2 && <div>Item Three</div>}
        </div>
        <Link to={routes.HOME}>Déconnexion</Link>
      </div>
    );
  }
}
