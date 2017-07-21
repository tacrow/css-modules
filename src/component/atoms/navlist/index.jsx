import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

export default class NavList extends React.Component {
  render() {
    let className = cx({
      NavList: true,
    });

    return(
      <li className={className}>
        <a href={this.props.link}>
          { this.props.children }
        </a>
      </li>
    );
  }
}