import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

export default class Thumbnail extends React.Component {
  render() {
    return(
      <div className={styles.Thumbnail}>
        <img
          src={this.props.thumbnail.src} 
          alt={this.props.thumbnail.alt} />
      </div>
    );
  }
}