import React from "react";
import { Link } from "react-router-dom";
import PostList from "components/blog/PostList.js";

const Welcome = () => (
  <article className="post">
    <header>
      <div className="title">
        <h2>Private tutoring</h2>
        <p>Computer Science, Physics, Mathematics & Career Counseling</p>
      </div>
    </header>
    <p>Professional and experienced tutor specializing in Computer Science. 
      I also provide tutoring in college level Physics and Mathematics.</p>
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
      </ul>
      <p className="copyright">
        &copy; Harut 2023. React and blog infa built from scratch. CSS
        from <a href="http://html5up.net">HTML5 UP</a>.
      </p>
    </section>
  </article>
  
);

// TODO(akrentsel): Link to website source

export default Welcome;
