import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

export default class Button extends React.Component {
  render() {
    let className = cx({
      Btn: true,
      Btn___active: this.props.clickable,
      Btn___danger: this.props.danger
    });

    return(
      <button
        type={this.props.type}
        className={className}
        onClick={this.props.onClickAction}>
        {this.props.children}
      </button>
    );
  }
}