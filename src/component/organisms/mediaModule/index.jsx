import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

import ThumbNail from '../../atoms/media/thumbnail/'
import DescriptionList from '../../molecules/descriptionList/'

export default class MediaModule extends React.Component {
  render() {
    return(
      <div className={styles.MediaModule}>
        <div className={styles.ThumbnailBox}>
          <ThumbNail thumbnail={this.props.thumbnail} />
        </div>
        <div className={styles.InfoBox}>
          <DescriptionList dl={this.props.dl} />
        </div>
      </div>
    );
  }
}