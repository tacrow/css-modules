import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

export default class HeaderSearch extends React.Component {
  render() {
    return(
      <div className={styles.HeaderSearch}>
        <input type="text" />
      </div>
    );
  }
}
