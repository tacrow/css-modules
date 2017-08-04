import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

// component
import Logo from '../../atoms/logo'
import MenuButton from '../../atoms/button/menuButton'
import NavItem from '../../atoms/navlist'
import HeaderSearch from '../../atoms/form/headerSearch'

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
      menuOpen: false,
    }
  }

  handleClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    const classNameMenu = cx({
      Menu: true,
      Menu___open: this.state.menuOpen,
    });

    return(
      <header className={styles.Header}>
        <Logo />
        <MenuButton
          style={this.state.menuOpen}
          onClick={() => this.handleClick()} />
        <nav className={classNameMenu}>
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
        <HeaderSearch />
      </header>
    );
  }
}
