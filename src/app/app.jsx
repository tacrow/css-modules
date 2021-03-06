import React from 'react';
import { render } from 'react-dom';

// component
import Header from '../component/organisms/header';
import Hero from '../component/atoms/hero';
import Contents from '../component/organisms/contents';
import Footer from '../component/organisms/footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Contents />
      <Footer />
    </div>
  );
}

render(<App />, document.querySelector('#app'));
