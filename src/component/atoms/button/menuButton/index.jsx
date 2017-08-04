import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

export default class MenuButton extends React.Component {
  render() {
    let className = cx({
      MenuBtn: true,
      MenuBtn___active: this.props.style,
    });

    return(
      <div
        className={className}
        onClick={this.props.onClick}>MENU
      </div>
    );
  }
}