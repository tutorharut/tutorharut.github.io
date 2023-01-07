import React from "react";
import Analytics from "react-router-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import ScrollToTop from "react-router-scroll-top";
import "./assets/css/main.css";

import NavBar from "./components/NavBar.js";
import About from "./components/content/About.js";
import Posts from "./components/content/Posts.js";
import Post from "./components/blog/Post.js";
import Music from "./components/content/Music.js";
import Teaching from "./components/content/Teaching.js";
import Projects from "./components/content/Projects.js";
import Contact from "./components/content/Contact.js";
import Welcome from "./components/content/Welcome.js";
import BriefAboutInsert from "./components/BriefAboutInsert.js";

class App extends React.Component {
  render = () => (
    <DocumentTitle title="Tutor Harut">
      <Router>
        <Analytics id="UA-143332212-1">
          <ScrollToTop />
          <div id="wrapper">
          <Route exact path="/" component={BriefAboutInsert} />
            <Route path="/" component={NavBar} />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/qualifications" component={Music} />
                <Route path="/services" component={Teaching} />
                // "/posts" exactly goes to the directory, otherwise we try to
                // display a particular post.
                <Route exact path="/policies" component={Posts} />
                <Route path="/contact" component={Contact} />
                // TODO: Add wildcard path here to show an error image.
              </Switch>
            </div>
          </div>
        </Analytics>
      </Router>
    </DocumentTitle>
  );
}

export default App;
