import React from "react";

import NormalPic from "assets/imgs/harut.jpg";
import NaturePic from "assets/imgs/alex-nature.jpg";
import SillyPic from "assets/imgs/alex-silly.jpg";
import { Link } from "react-router-dom";

import ToggleImage from "./ToggleImage.js";

const BriefAboutInsert = () => (
  <section id="sidebar">
    <section id="intro">
      <ToggleImage
        defaultImage={NormalPic}
        clickedImage={NormalPic}
        mouseOverImage={NormalPic}
      />
      <header>
        <h2>Tutor Harut</h2>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:tutorharut@gmail.com"
          >
            tutorharut@gmail.com
          </a>
        </p>
      </header>
    </section>
    <section>
      <h3>Brief Intro</h3>
      <p>
        Hi! I'm Harut, a software engineer at Google LAX. I've been a private tutor and teacher's assistant for over 
        3 years, helping hundreds of students in their education and career. I graduated from UC Berkeley, and have 
        previously worked in the industry at companies like Amazon and NASA. In the field of academia, I've conducted
        research at Carnegie Mellon University, UC Berkeley, and CSU Northridge.
      </p>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'top', height: '15vh'}}>
      <Link to="/qualifications" className="button large">
        Qualifications
      </Link>
</div>

    </section>
   
  </section>
);

export default BriefAboutInsert;
