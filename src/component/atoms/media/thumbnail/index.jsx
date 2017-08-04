import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

export default class Thumbnail extends React.Component {
  render() {
    return(
      <div className={styles.Thumbnail}>
        <a href={this.props.thumbnail.url}>
          <img
            src={this.props.thumbnail.src}
            alt={this.props.thumbnail.alt} />
        </a>
      </div>
    );
  }
}
