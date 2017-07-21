import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

let cx = classNames.bind(styles);

// component
import NavItem from '../../atoms/navlist'

let NavItems = [
  {
    id: 0,
    label: 'TOP',
    link: '/'
  },
  {
    id: 1,
    label: 'ITEM1',
    link: '/item1'
  },
  {
    id: 2,
    label: 'ITEM2',
    link: '/item2'
  }
];

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItems: NavItems
    }
  }

  render() {
    let className = cx({
      NavList: true,
    });
    return(
      <ul className={className}>
        {NavItems.map(type => (
          <NavItem
            key={type.id}
            link={type.link} 
            children={type.label}
          />
        ))}
      </ul>
    );
  }
}