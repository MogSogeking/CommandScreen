// @flow
import React, { Component } from 'react';
import styles from './Brick.css';

type Props = {
  children: Node,
  click: () => void
};

export default class Brick extends Component<Props> {
  props: Props;

  render() {
    const { children, click } = this.props;
    return (
      <div
        className={styles.container}
        data-tid="container"
        onClick={click}
        role="button"
        onKeyDown={() => {}}
        tabIndex={-1}
      >
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
