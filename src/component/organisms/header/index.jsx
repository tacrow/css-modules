import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'
// component
import Logo from '../../atoms/logo'
import NavItem from '../../atoms/navlist'

let cx = classNames.bind(styles);

let NavItems = [
  {
    id: 0,
    label: 'ITEM1',
    link: '/item1'
  },
  {
    id: 1,
    label: 'ITEM2',
    link: '/item2'
  },
  {
    id: 2,
    label: 'ITEM3',
    link: '/item3'
  },
  {
    id: 3,
    label: 'ITEM4',
    link: '/item4'
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
    return(
      <header className={styles.Header}>
        <Logo />
        <nav>
          <ul className={styles.NavLists}>
            {NavItems.map(type => (
              <NavItem
                key={type.id}
                link={type.link} 
                children={type.label}
              />
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}