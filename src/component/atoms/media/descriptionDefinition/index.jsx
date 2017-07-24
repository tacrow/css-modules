import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

export default class DescriptionDefinition extends React.Component {
  render() {
    return(
      <p className={styles.Text}>
        {this.props.text}
      </p>
    );
  }
}