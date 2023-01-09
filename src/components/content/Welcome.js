import React from "react";
import { Link } from "react-router-dom";
import PostList from "components/blog/PostList.js";
import CSLogo from "../../assets/imgs/logo-cs.png"
import CareerLogo1 from "../../assets/imgs/career.png"
import CareerLogo2 from "../../assets/imgs/career1.png"
import Phys from "../../assets/imgs/phys.png"

const Welcome = () => (
  <article className="post">
    <header>
      <div className="title">
        <h2>Private tutoring</h2>
        <p>Experienced Google Software Engineer; providing academic tutoring and career/education coaching.  
      Also providing tutoring in college level Physics and Mathematics.</p>
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
               Fullstack, C/C++, Java, and Python. Working proficiency in most lanugages and frameworks used
               by modern companies.  </p></div>
            </div>
          </div>
        </article>

        <article className="post" style={{backgroundColor: "#a0a0a013"}}>
        <div className="container" style={{display: 'flex',  alignItems:'top'}}>
        <img src={CareerLogo2} style={{display: 'flex',  justifyContent:'left', alignItems:'top'}} height = {125} width = {125} ></img>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'top'}}>
            <div>
            <p style={{fontWeight: '700',justifyContent: 'space-between'}}>Career and Education Coaching: &nbsp;</p>
            
            <p > In addition to practical knowledge. Creating and polishing resumes. Finding internships. Finding research
              University applications. Scholarships. Any other career/education related extracirriculars  </p></div>
            </div>
          </div>
        </article>

        <article className="post" style={{backgroundColor: "#a0a0a013"}}>
        <div className="container" style={{display: 'flex',  alignItems:'top'}}>
        <img src={Phys} style={{display: 'flex',  justifyContent:'left', alignItems:'top'}} height = {125} width = {125} ></img>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'top'}}>
            <div>
            <p style={{fontWeight: '700',justifyContent: 'space-between'}}>Math and Physics: &nbsp;</p>
            
            <p > All lower division Mathematics, such as Algebra, Precalculus, Trigonometry, Statistics, Calculus, Discre  </p></div>
            </div>
          </div>
        </article>

      
  </article>
  
);

// TODO(akrentsel): Link to website source

export default Welcome;
