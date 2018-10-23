import React, { Component } from 'react';
import '../css/App.css';
import HeaderBar from './Headerbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />

        <ScrollableAnchor id={'about'}>
          <Section1 />
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Section2 />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Section3 />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
