(this.webpackJsonptutorharut=this.webpackJsonptutorharut||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/harut.9e4e113e.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/UI_example1.c915c672.png"},35:function(e,t,a){e.exports=a.p+"static/media/entropy-walkthrough-cs189.46b9391b.png"},36:function(e,t,a){e.exports=a.p+"static/media/dis10-sol.16b7edd4.pdf"},37:function(e,t,a){e.exports=a.p+"static/media/kernel-discussion-img.a6e48696.png"},38:function(e,t,a){e.exports=a.p+"static/media/csci100-website.1d25c63d.png"},39:function(e,t,a){e.exports=a.p+"static/media/slash-image.7ca72633.png"},40:function(e,t,a){e.exports=a.p+"static/media/shortl-image.c056b72b.png"},41:function(e,t,a){e.exports=a.p+"static/media/krentsel-website.ea47e122.png"},42:function(e,t,a){e.exports=a.p+"static/media/logo-cs.bfe81e70.png"},43:function(e,t,a){e.exports=a(89)},48:function(e,t,a){},57:function(e,t,a){},73:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/alex-nature.96add150.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/alex-silly.6db494f0.jpg"},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=(a(48),a(5)),i=a(8),s=a(7),u=a(26),m=a.n(u),d=a(1),h=a(2),p=a(6),f=a.n(p),E=a(28),g=(a(57),a(11)),b=a(29),k=(a(73),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={menuOpen:!1},n}return Object(g.a)(a,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,r.a.createElement(d.Link,{to:"/"},"Home & Contact")),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/qualifications"},"Qualifications")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/cs"},"Computer Science")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/career"},"Career")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/mathphys"},"Math & Physics")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/policies"},"Policies")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/contact"},"Contact")))),r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,r.a.createElement("li",{className:"menu"},r.a.createElement("a",{className:"fa-bars"},r.a.createElement(b.slide,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},right:!0,width:275},r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/"},"Home & Contact"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/qualifications"},"Qualifications"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/cs"},"Computer Science"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/career"},"Career"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/mathphys"},"Math & Physics"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/policies"},"Policies"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/contact"},"Contact"))))))))}}]),a}(r.a.Component)),y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).classes=n.props.iconClass+" img_logo",n}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.classes,style:{border:"1px solid #d1c8c8"}}))}}]),a}(r.a.Component),v=a(30),w=a.n(v),C=a(31),S=a(4),I=(a(83),a(84),r.a.Component,a(32)),j=a.n(I),N=function(e){var t=e.title,a=(e.author,e.postPath),n=e.publishDate;return r.a.createElement("section",null,j()(n,"mmm yyyy")," : ",r.a.createElement("b",null,r.a.createElement(d.Link,{to:"/posts/"+a},t)))},O=a(33),x=a.n(O),M=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gracePeriod:!0,dataStatus:0,postList:[],featured:e.featured},setTimeout((function(){n.setState({gracePeriod:!1})}),750),n}return Object(g.a)(a,[{key:"getPostList",value:function(){var e=this;fetch("https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/"+(this.state.featured?"featuredposts":"posts"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return Date.parse(t.publishDate)-Date.parse(e.publishDate)})),e.setState({dataStatus:1,postList:t})})).catch((function(t){e.setState({dataStatus:2}),console.log("Error while fetching:",t)}))}},{key:"componentDidMount",value:function(){this.getPostList()}},{key:"render",value:function(){switch(this.state.dataStatus){case 1:return r.a.createElement("ul",null,r.a.createElement(x.a,null,this.state.postList.map((function(e,t){return r.a.createElement("li",null,r.a.createElement(N,{key:e.postPath,title:e.title,author:e.author,postPath:e.postPath,publishDate:e.publishDate}))}))));case 0:return r.a.createElement("p",null,this.state.gracePeriod?"":"Loading...");case 2:return r.a.createElement("p",null,"Well this is embarassing...error loading posts. Try again later.")}}}]),a}(r.a.Component),L=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{title:"Posts"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Posts"))),r.a.createElement("section",null,r.a.createElement("p",null,"Thoughts on the world, for the world. A mix of technical posts, comments on books, and discussion of ideas."),r.a.createElement(M,null))))}}]),a}(r.a.Component),P=function(){return r.a.createElement(f.a,{title:"Music"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Music"))),r.a.createElement("p",null,"I started playing violin in elementary school and quickly fell in love. I played bassoon for a year, saxaphone for two years, and a bit of piano, but ultimately violin was the instrument for me. I am very grateful for the")))},A=(a(86),a(34)),_=a.n(A),T=a(35),B=a.n(T),D=a(36),H=a.n(D),U=a(37),W=a.n(U),F=a(38),G=a.n(F),q=function(){return r.a.createElement(f.a,{title:"Teaching"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Teaching"))),r.a.createElement("h3",null,"Howard University"),r.a.createElement("p",null,"For Fall 2021, I was on faculty at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.howard.edu/"},"Howard University")," as"," ","a visitng lecturer teaching 185 students in CSCI100: Intro to Computer Science."," ",r.a.createElement("ul",null,r.a.createElement("li",null,"Developed ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/calendar"},"syllabus and curriculum")," based on industry standards and CS courses at Berkeley and Stanford."),r.a.createElement("li",null,"Produced, recorded, and published ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCS-xiMGMN9YsMxQnqAai4hw/featured"},"~125 lecture videos on course YouTube Channel"),"."),r.a.createElement("li",null,"Built course website, ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/"},"csci100.org"),", to act as centralized public hub for students and allow for auditing the course."),r.a.createElement("li",null,"Hired and managed team of 5 Howard TAs, hosting office hours and writing/grading assignments."),r.a.createElement("li",null,"Recruited 15 volunteer TAs from Google, providing weekly 30 hours of office hours, 15 hours of mock interviews, 6 hours of 1:1 tutoring."))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"CSCI100 Fall 2021 Class Website"),r.a.createElement("time",{className:"published",datetime:"2021-08-15"},"Fall 2021"),r.a.createElement("p",null,"Course website I built to host all content for my course publicly,"," ","including lecture videos, slides, topic calendar, syllabus, announcements, and more.")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/calendar",className:"image"},r.a.createElement("img",{height:"400",src:G.a,alt:""}))),r.a.createElement("h3",null,"Stanford University"),r.a.createElement("p",null,"I've TA'ed Stanford's Code-in-Place course twice (Spring 2020, 2021),"," ","as part of a 900 person teaching staff instructing 10,000 students around the world."," ","I taugtht a section of 10 students each week for 5 weeks. My mom wanted to learn to"," ","code, so she took the course with me in Spring 2021."),r.a.createElement("h3",null,"UC Berkeley"),r.a.createElement("p",null,"While at UC Berkeley, I worked as a TA for 5 semesters, teaching",r.a.createElement("ul",{style:{listStylePosition:"inside"}},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://inst.eecs.berkeley.edu/~ee16a/fa16/"},"EE16A: Introduction to Electrical Engineering"),", Fall 2016"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://inst.eecs.berkeley.edu/~ee16a/sp17/"},"EE16A: Introduction to Electrical Engineering"),", Spring 2017"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sp18.datastructur.es/"},"CS61B: Data Structures and Algorithms"),", Spring 2018"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cs168.io/"},"CS168: Internet Architecture"),", Fall 2018"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),", Spring 2019")),"As a TA, I taught discussion sections of 20-40 students, wrote discussion sheets, wrote exams, wrote homeworks, graded exams, held office hours, and proctored exams."),r.a.createElement("p",null,"During this time, I made a variety of teaching materials for my sections. Below is a selection of some of the teaching materials that I created."),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Decision Tree - Entropy Explanation"),r.a.createElement("time",{className:"published",datetime:"2019-04-15"},"April 2019"),r.a.createElement("p",null,'This is an interactive visualization of "Information Gain" and entropy change during the splitting phase of training a decision tree. Originally I made just the visualization to provide visual intuition to my section and aid in my explanation, then I added annotations and shared the interactive demo with the entire class. Created for Spring 2019\'s ',r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.desmos.com/calculator/djl212axuk",className:"image"},r.a.createElement("img",{height:"400",src:B.a,alt:""}))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Multicast Mini-Lecture & Walkthrough"),r.a.createElement("time",{className:"published",datetime:"2018-12-01"},"November 2018"),r.a.createElement("p",null,"A 4-video series of videos teaching about the motivation and ideas behind Multicast, going over the details of DVMRP and CBT (Core-Based Trees) Multicast, and walking through the solutions to 3 practice problems. Created for ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cs168.io/"},"CS168: Internet Architecture")," to make up for a week of class ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.washingtonpost.com/education/2018/11/16/camp-fire-smoke-closes-uc-berkeley-other-bay-area-colleges/?noredirect=on&utm_term=.5004ec151007"},"cancelled due to smoke from the Camp Fire"),".")),r.a.createElement("iframe",{title:"Multicast Mini-Lecture & Walkthrough",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PLKOGYtAOQFSPPoeqcIJtJI7ri4ZWsvdx_",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Build Your Own Game (BYOG): CS61B Project"),r.a.createElement("time",{className:"published",datetime:"2018-12-10"},"December 2018 - February 2019"),r.a.createElement("p",null,"Co-wrote new project for the Spring offering of CS61B. Wrote the skeleton code structure, as well as the working prototypes and staff solution, and helped develp the project spec. Project implemented by ~1400 students. The skeleton code for the project can be found on ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Berkeley-CS61B/skeleton-sp18/tree/master/proj2/byog"},"GitHub"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sp18.datastructur.es/materials/proj/proj2/proj2",className:"image"},r.a.createElement("img",{height:"400",src:_.a,alt:""}))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"CS189 Kernels Discussion Material"),r.a.createElement("time",{className:"published",datetime:"2019-04-09"},"April 2019"),r.a.createElement("p",null,"Course material written for a discussion section on Kernels. Some problems written entirely by me, others edited from previous semesters. Taught to ~750 students in discussion sections by ~15 TAs. Created for Spring 2019's ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:H.a,className:"image"},r.a.createElement("img",{height:"400",src:W.a,alt:""})))))},z=(a(39),a(40),a(41),function(){return r.a.createElement(f.a,{title:"Contact"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Contact"))),r.a.createElement("p",null," I love meeting new people and exchanging ideas. If you want to ask a question, get lunch or coffee, or just say hi, shoot me an email at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:alex@krentsel.com"},"alex@krentsel.com"),".")))}),Q=a(42),Y=a.n(Q),J=function(){return r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Private tutoring"),r.a.createElement("p",null,"Computer Science, Physics, Mathematics & Career Counseling"))),r.a.createElement("p",null,"Professional and experienced tutor specializing in Computer Science. I also provide tutoring in college level Physics and Mathematics."),r.a.createElement("article",{className:"post",bodyAttributes:{style:"background-color : #000"}},r.a.createElement("div",{className:"container",style:{display:"flex",alignItems:"top"}},r.a.createElement("img",{src:Y.a,style:{display:"flex",justifyContent:"left",alignItems:"top"},height:125,width:125}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"top"}},r.a.createElement("p",{style:{fontWeight:"700"}},"Computer Science: "),r.a.createElement("p",null," I offer")))),r.a.createElement("article",{className:"post",bodyAttributes:{style:"background-color : #000"}},"Career"),r.a.createElement("article",{className:"post",bodyAttributes:{style:"background-color : #000"}},"Math"),r.a.createElement("article",{className:"post",bodyAttributes:{style:"background-color : #000"}},"Physics"))},R=a(17),K=a.n(R),V=(a(87),a(88),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={image:e.props.defaultImage,locked:!1},e.handleClick=function(){!e.state.locked&&e.props.clickedImage&&e.setState((function(t){return{image:e.props.clickedImage,locked:!0}}))},e.handleMouseOver=function(){!e.state.locked&&e.props.mouseOverImage&&e.setState((function(t){return{image:e.props.mouseOverImage}}))},e.handleMouseOut=function(){!e.state.locked&&e.props.defaultImage&&e.setState((function(t){return{image:e.props.defaultImage}}))},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo",onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},r.a.createElement("img",{alt:"Profile pic",src:this.state.image}))}}]),a}(r.a.Component)),X=function(){return r.a.createElement("section",{id:"sidebar"},r.a.createElement("section",{id:"intro"},r.a.createElement(V,{defaultImage:K.a,clickedImage:K.a,mouseOverImage:K.a}),r.a.createElement("header",null,r.a.createElement("h2",null,"Tutor Harut"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:tutorharut@gmail.com"},"tutorharut@gmail.com")))),r.a.createElement("section",null,r.a.createElement("h3",null,"Brief Intro"),r.a.createElement("p",null,"Hi! I'm Harut, a software engineer at Google LAX. I've been a private tutor and teacher's assistant for over 3 years, helping hundreds of students in their education and career. I graduated from UC Berkeley, and have previously worked in the industry at companies like Amazon and NASA. In the field of academia, I've conducted research at Carnegie Mellon University, UC Berkeley, and CSU Northridge."),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"top",height:"15vh"}},r.a.createElement(d.Link,{to:"/qualifications",className:"button large"},"Qualifications"))))},Z=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,$=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).render=function(){return r.a.createElement(f.a,{title:"Tutor Harut"},r.a.createElement(d.BrowserRouter,null,r.a.createElement(m.a,{id:"UA-143332212-1"},r.a.createElement(E.a,null),r.a.createElement("div",{id:"wrapper"},Z<1280?r.a.createElement(h.d,{exact:!0,path:"/",component:X}):r.a.createElement(r.a.Fragment,null),r.a.createElement(h.d,{path:"/",component:k}),r.a.createElement("div",{id:"main"},r.a.createElement(h.g,null,r.a.createElement(h.d,{exact:!0,path:"/",component:J}),r.a.createElement(h.d,{path:"/qualifications",component:P}),r.a.createElement(h.d,{path:"/cs",component:q}),r.a.createElement(h.d,{path:"/career",component:q}),r.a.createElement(h.d,{path:"/mathphys",component:q}),r.a.createElement(h.d,{exact:!0,path:"/policies",component:L}),r.a.createElement(h.d,{path:"/contact",component:z}),"// TODO: Add wildcard path here to show an error image.")),Z>=1280?r.a.createElement(h.d,{exact:!0,path:"/",component:X}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("section",{id:"footer"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/alex-krentsel/",className:"fab fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:tutorharut@gmail.com",className:"fas fa-envelope"},r.a.createElement("span",{className:"label"},"Email"))),r.a.createElement("p",{className:"copyright"},"\xa9 Harut 2023. React and blog infa built from scratch. CSS from ",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),".")))))))},e}return a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.99c00201.chunk.js.map