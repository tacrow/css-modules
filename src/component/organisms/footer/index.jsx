import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

export default class Footer extends React.Component {
  render() {
    return(
      <footer className={styles.Footer}>
        <p>Copyright&nbsp;&copy;&nbsp;CSS-Modules All Rights Reserved.</p>
      </footer>
    );
  }
}