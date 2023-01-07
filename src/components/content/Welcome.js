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
      <div className="rectangle" style={{ width: 100, height: 500,color:"black" }}/>
      
  </article>
  
);

// TODO(akrentsel): Link to website source

export default Welcome;
