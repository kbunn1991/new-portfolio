import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/Section3.css';

class Section2 extends React.Component {
  render() {
    return (
      <div className="sec3">
        
        
        {/* <Nav /> */}

        <center>
          <a href="https://github.com/kbunn1991"><div className="circlePadding">
              <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/kbunn1991/">
            <div className="circlePadding">
              <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="mailto:kabunn1991@gmail.com">
            <div className="circlePadding">
            <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/kkulbeokjji/">
            <div className="circlePadding">
            <div className="circleBorder hvr-wobble-vertical">
                <div className="circle hvr-fade">
                  <div className="circleText">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </div>
              </div>
            </div>
          </a>

        </center>


      </div>
    )
  }
}

export default Section2;