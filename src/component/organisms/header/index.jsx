import React from 'react';
import classNames from 'classnames/bind'; // eslint-disable-line import/no-extraneous-dependencies
import styles from './style.css';

// component
import Logo from '../../atoms/logo';
import MenuButton from '../../atoms/button/menuButton';
import NavItem from '../../atoms/navlist';
import HeaderSearch from '../../atoms/form/headerSearch';

const cx = classNames.bind(styles);

const NavItems = [
  {
    id: 0,
    label: 'ITEM1',
    link: '/item1',
  },
  {
    id: 1,
    label: 'ITEM2',
    link: '/item2',
  },
  {
    id: 2,
    label: 'ITEM3',
    link: '/item3',
  },
  {
    id: 3,
    label: 'ITEM4',
    link: '/item4',
  },
];

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const classNameMenu = cx({
      Menu: true,
      Menu___open: this.state.menuOpen,
    });

    const navItem = NavItems.map((type) => {
      return (
        <NavItem
          key={type.id}
          link={type.link}
          children={type.label}
        />
      );
    });

    return (
      <header className={styles.Header}>
        <Logo />
        <MenuButton
          style={this.state.menuOpen}
          onClick={() => this.handleClick()}
        />
        <nav className={classNameMenu}>
          <ul className={styles.NavLists}>
            { navItem }
          </ul>
        </nav>
        <HeaderSearch />
      </header>
    );
  }
}
