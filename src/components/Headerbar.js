import React, {Component} from 'react';
import '../css/HeaderBar.css';

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="header">
        <a href='#about'> Home </a>
        <a href='#projects'> Projects </a>
        <a href='#contact'> Contact </a>
      </div>
    )
  }
}

export default HeaderBar;