import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

export default class Logo extends React.Component {
  render() {
    let className = cx({
      Logo: true,
    });

    return(
      <div className={className}>
        <a href="/">
          <img src="./public/img/logo.svg" width="25" height="25" alt="react-css-modules" />
        </a> 
      </div>
    );
  }
}