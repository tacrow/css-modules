import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

import DescriptionTerm from '../../atoms/media/descriptionTerm/'
import DescriptionDefinition from '../../atoms/media/descriptionDefinition/'

export default class MediaModule extends React.Component {
  render() {
    return(
      <div>
        <DescriptionTerm title={this.props.dl.title} />
        <DescriptionDefinition text={this.props.dl.text} />
      </div>
    );
  }
}