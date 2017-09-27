import React from 'react';
import styles from './style.css';

export default class Hero extends React.Component {
  render() {
    return (
      <div className={styles.Hero}>
        <p className={styles.MainText}>CSS&nbsp;Modules
          <span className={styles.SubText}>&ensp;by&nbsp;React.js</span>
        </p>
      </div>
    );
  }
}
