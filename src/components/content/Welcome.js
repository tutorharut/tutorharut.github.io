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
        <p>Professional and experienced tutor specializing in Computer Science. 
      also providing tutoring in college level Physics and Mathematics.</p>
      </div>
    </header>
    

      <article className="post" style={{backgroundColor: "#a0a0a013"}}>
        <div className="container" style={{display: 'flex',  alignItems:'top'}}>
        <img src={CSLogo} style={{display: 'flex',  justifyContent:'left', alignItems:'top'}} height = {125} width = {125} ></img>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'top'}}>
            <div>
            <p style={{fontWeight: '700',justifyContent: 'space-between'}}>Computer Science: &nbsp;</p>
            
            <p > From introductory topics to advanced cutting edge technologies, I provide professional tutoring in 
              the field of computer science. Specific topics include Data Structures, Algorithms, Backend, Frontend,
               Fullstack. Excellent in C/C++, Java, and Python. Working proficiency in most lanugages and frameworks
               in modern codebases.  </p></div>
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
