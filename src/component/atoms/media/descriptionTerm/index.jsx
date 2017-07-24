import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

export default class DescriptionTerm extends React.Component {
  render() {
    return(
      <div className={styles.Title}>
        {this.props.title}
      </div>
    );
  }
}