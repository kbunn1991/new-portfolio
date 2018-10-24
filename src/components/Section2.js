import React from 'react';
import '../css/Section2.css';

class Section2 extends React.Component {
  render() {
    return (
      <div className="sec2">
          <div className="projectsCont">

          <h1>Now Viewing: <span>Projects 2018</span></h1>

            <div className="project">
              <div className="infoz">
                <div className="links">
                  
                  <a href="https://partyup-client.herokuapp.com/">
                    <div className="buttonBg">
                      <div className="button">
                        live app
                      </div>
                    </div> 
                  </a>

                  <a href="https://github.com/kbunn1991/kaitlin-partyup-client">
                    <div className="buttonBg">
                      <div className="button">
                        github
                      </div>
                    </div> 
                  </a>

                </div>
                <div className="projectImage partyUp">
                </div>
                <div className="pInfos">
                <span>Demo Account:</span> un: demouser, pw: password123<br /><br />
                <span>Party Up</span> is an app built for Playstation users to help them find specific groups to play online games with. It allows users to use specific tags with their groups, i.e. girls only, lgbtq+, etc.<br /><br />
                
                <span>frontend:</span> react, redux<br />
                <span>backend:</span> node, express, jwt, mongoDB
                </div>
              </div>
            

              <div className="infoz">
                
              <div className="links">

                <a href="https://bunneh-client.herokuapp.com/">
                    <div className="buttonBg">
                      <div className="button">
                        live app
                      </div>
                    </div> 
                  </a>

                  <a href="https://github.com/kbunn1991/Lapine-DonnyKaitlin-Client">
                    <div className="buttonBg">
                      <div className="button">
                        github
                      </div>
                    </div> 
                  </a>

                </div> 

                <div className="projectImage bunnyBabble">
                </div>
                <div className="pInfos">
                <span>Demo Account:</span> un: demouser, pw: password123<br /><br />

                Bunny Babble is a language-learning app targeted towards consumers that wish to learn the language Lapine created for the novel Watership Down. It uses a spaced repetition algorithm to assist in memorization.
                <br /><br />
                <span>frontend:</span> react, redux, react pages <br />
                <span>backend:</span> node, express, jwt, mongoDB
                </div>
              </div>

              <div className="infoz">
                
              <div className="links">

                <a href="https://weatherfm-client.herokuapp.com/">
                    <div className="buttonBg">
                      <div className="button">
                        live app
                      </div>
                    </div> 
                  </a>

                  <a href="https://github.com/kbunn1991/WeatherFM-Client-PurpleCobras">
                    <div className="buttonBg">
                      <div className="button">
                        github
                      </div>
                    </div> 
                  </a>

                </div>

                <div className="projectImage weatherFM">
                </div>
                <div className="pInfos">
                <span>Demo Account:</span> un: demoUser, pw: password<br /><br />

                  Weather FM is a mood music app that gives you song recommendations based on the current weather. Created for music lovers, users can add the songs to playlists and export them to spotify.<br /><br />

                <span>frontend:</span> react, redux <br />
                <span>backend:</span> node, express, jwt, mongoDB<br />
                <span>apis:</span> spotify, youtube, open weather
                </div>
              </div>

              <div className="infoz">

                <div className="links">

                <a href="https://overwatchapp.herokuapp.com/">
                    <div className="buttonBg">
                      <div className="button">
                        live app
                      </div>
                    </div> 
                  </a>

                  <a href="https://github.com/kbunn1991/overwatch-app">
                    <div className="buttonBg">
                      <div className="button">
                        github
                      </div>
                    </div> 
                  </a>

                </div>
                <div className="projectImage overwatch">
                </div>
                <div className="pInfos">
                This simple, informational Overwatch app was coded in a day with only React. It was created for Overwatch fans that might want quick and easy information about their favorite heroes.<br /><br />
                <span>frontend: react</span> <br />
                <span>backend: n/a</span> 
                </div>
              </div>
          
            </div>

            {/* <div className="project">
              <div className="projectImage bunnyBabble">
              </div>

              <div className="projectInfo">
                <div className="pInfo">
                  info info info
                </div>
              </div>

              <div className="links">
                github<br />
                live version
              </div>
            </div> */}

           

        </div>
      </div>
    )
  }
}

export default Section2;