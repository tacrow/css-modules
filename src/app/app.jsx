'use strict';

import React from 'react'
import {render} from 'react-dom'
import styles from './style.css'

// component
import Header from '../component/organisms/header'
import Contents from '../component/organisms/contents'
import Footer from '../component/organisms/footer'

class App extends React.Component {
  render() {
    return(
      <div className={styles.Container}>
        <Header />
        <Contents />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.querySelector('#app'));