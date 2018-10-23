import React, {Component} from 'react';
import '../css/Section1.css';

class Section1 extends React.Component {
  render() {
    return (
      <div className="sec1">
        <div className="topPart">
        </div>
        <div className="imageBorder">
          <div className="profImage">
          </div>
        </div>

        <div className="flexin">
          <div className="flexBox1">
            <div className="innerBox">
              Hello! My name is Kaitlin and I'm a coding bug based in Atlanta, GA. I love creating beautiful websites and working in team environments with a focus on modern, clean design. When I'm not nose-deep in code, I'm travelling, competing in Overwatch, or binge-watching One Piece o /<br /><br />
              Scroll down to see my current projects!
            </div>
          </div>

          <div className="flexBox2">
            <h1>notable skills</h1>

            <div className="skills">
              techstack: css, html, javascript, node.js, sql, mongoDB, react, react native, redux, github, devtools <br /><br />
              languages: english (fluent), korean (int.), spanish (int.), japanese (beg.)
              <br /><br />
              other: photoshop cc, creative and professional writing, international travel experience
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section1;