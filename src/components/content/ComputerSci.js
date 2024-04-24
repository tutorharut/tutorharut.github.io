import React from "react";
import DocumentTitle from 'react-document-title';
import 'assets/css/teaching.css';

import CS61BProjPic from 'assets/imgs/UI_example1.png';
import EntropyExplanationPic from 'assets/imgs/entropy-walkthrough-cs189.png'
import CS189KernelPDF from 'assets/pdfs/dis10-sol.pdf'
import CS189KernelDiscPic from 'assets/imgs/kernel-discussion-img.png'
import CSCI100Website from 'assets/imgs/csci100-website.png'
import CSLogo from "../../assets/imgs/logo-cs.png"

import 'assets/css/timeline.css';
import { useEffect, useState } from 'react';


import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const Timeline = ({ timeline }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-300px 0px',
  });

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, {threshold: [0.5]});
    items.forEach((item) => observer.observe(item));
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 1000);
  }, []);


  return (
    <div className="timeline-container">
    {timeline.map((item, index) => (
      <div key={index} className={`timeline-item ${fadeIn ? 'fade-in':''}`} style={{ backgroundImage: `url(${item.backgroundImage})` }}>
        <img src={item.icon} alt={item.title} className="timeline-icon" />
        <div className="timeline-content">
          <h3 className="timeline-title">{item.title}</h3>
          <p className="timeline-description">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  );
};



  const timeline = [
    {
      icon: CSLogo,
      title: 'Company 1',
      description: 'I worked as a software engineer at Company 1, where I developed and maintained web applications.',
      backgroundImage: CSLogo,
    },
    {
      icon: CSLogo,
      title: 'Company 2',
      description: 'I worked as a lead developer at Company 2, where I managed a team of developers and oversaw the development of several mobile apps.',
      backgroundImage: CSLogo,
    },
    {
      icon: CSLogo,
      title: 'Company 3',
      description: 'I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.I currently work as a senior developer at Company 3, where I lead the development of an AI-powered platform.',
      backgroundImage: CSLogo,
    },
  ];

const ComputerSci = () => (
    <DocumentTitle title='ComputerSci'>
      <article className="post">
        <header>
          <div className="title">
            <h2>Computer Science</h2>
            <Timeline timeline={timeline} />
          </div>
        </header>
       
        
      </article>
    </DocumentTitle>
);

export default ComputerSci;
