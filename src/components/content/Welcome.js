import React from "react";
import { Link } from "react-router-dom";
import PostList from "components/blog/PostList.js";
import CSLogo from "../../assets/imgs/logo-cs.png"

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
      <article className="post" bodyAttributes={{style: 'background-color : #000'}}>
        <div className="container" style={{display: 'flex',  alignItems:'top'}}>
        <img src={CSLogo} style={{display: 'flex',  justifyContent:'left', alignItems:'top'}} height = {125} width = {125} ></img>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'top'}}>
            <p style={{fontWeight: '700'}}>Computer Science: </p>
            <p > I offer</p>
            </div>
          </div>
        </article>

        <article className="post" bodyAttributes={{style: 'background-color : #000'}}>
        Career
        </article>
        <article className="post" bodyAttributes={{style: 'background-color : #000'}}>
        Math
        </article>
        <article className="post" bodyAttributes={{style: 'background-color : #000'}}>
        Physics
        </article>
      
  </article>
  
);

// TODO(akrentsel): Link to website source

export default Welcome;
