import React, {Component} from 'react';
import '../css/HeaderBar.css';

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="header">
        <a href='#section1'> Home </a>
        <a href='#section2'> Projects </a>
        <a href='#section3'> Contact </a>
      </div>
    )
  }
}

export default HeaderBar;