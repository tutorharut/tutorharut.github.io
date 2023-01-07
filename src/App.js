import React from "react";
import Analytics from "react-router-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import ScrollToTop from "react-router-scroll-top";
import "./assets/css/main.css";

import NavBar from "./components/NavBar.js";
import About from "./components/content/About.js";
import Posts from "./components/content/Posts.js";
import Music from "./components/content/Music.js";
import Teaching from "./components/content/Teaching.js";
import Projects from "./components/content/Projects.js";
import Contact from "./components/content/Contact.js";
import Welcome from "./components/content/Welcome.js";
import BriefAboutInsert from "./components/BriefAboutInsert.js";
const width = window.innerWidth 
          || document.documentElement.clientWidth
          || document.body.clientWidth;

const height = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
class App extends React.Component {
  render = () => (
    <DocumentTitle title="Tutor Harut">
      <Router>
        <Analytics id="UA-143332212-1">
          <ScrollToTop />
          <div id="wrapper">
          
          {width<1280 ? (
        <Route exact path="/" component={BriefAboutInsert} />
      ) : (
        <></>
      )}

            <Route path="/" component={NavBar} />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/qualifications" component={Music} />
                <Route path="/cs" component={Teaching} />
                <Route path="/career" component={Teaching} />
                <Route path="/mathphys" component={Teaching} />
                <Route exact path="/policies" component={Posts} />
                <Route path="/contact" component={Contact} />
                // TODO: Add wildcard path here to show an error image.
              </Switch>
            </div>
            {width>=1280 ? (
        <Route exact path="/" component={BriefAboutInsert} />
      ) : (
        <></>
      )}
          </div>
          
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <section id="footer">
      <ul className="icons">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alex-krentsel/"
            className="fab fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:tutorharut@gmail.com"
            className="fas fa-envelope"
          >
            <span className="label">Email</span>
          </a>
        </li>
        <p className="copyright">
        &copy; Harut 2023. React and blog infa built from scratch. CSS
        from <a href="http://html5up.net">HTML5 UP</a>.
      </p>
      </ul>
    </section>
  </div>

        </Analytics>
      </Router>
    </DocumentTitle>
  );
}

export default App;
