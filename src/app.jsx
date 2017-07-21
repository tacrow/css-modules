'use strict';

import React from 'react'
import {render} from 'react-dom'

// component
import Header from './component/organisms/header'
import Button from './component/atoms/button'

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>React & CSS Modules & Atomic Design.</h1>
        <Header/>
        <Button type='submit' children='ボタン'/>
      </div>
    );
  }
}

render(<App/>, document.querySelector('#app'));