(this.webpackJsonptutorharut=this.webpackJsonptutorharut||[]).push([[0],{115:function(e,t,a){},126:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){e.exports=a.p+"static/media/alex-nature.96add150.jpg"},245:function(e,t,a){e.exports=a.p+"static/media/alex-silly.6db494f0.jpg"},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),o=a.n(l),c=(a(90),a(6)),i=a(9),s=a(8),m=a(68),u=a.n(m),p=a(2),h=a(1),d=a(7),f=a.n(d),E=a(70),g=(a(99),a(11)),b=a(71),w=(a(115),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={menuOpen:!1},n}return Object(g.a)(a,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,r.a.createElement(p.Link,{to:"/"},"Home & Contact")),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.Link,{to:"/qualifications"},"Qualifications")),r.a.createElement("li",null,r.a.createElement(p.Link,{to:"/services"},"Services")),r.a.createElement("li",null,r.a.createElement(p.Link,{to:"/policies"},"Policies")),r.a.createElement("li",null,r.a.createElement(p.Link,{to:"/contact"},"Contact")))),r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,r.a.createElement("li",{className:"menu"},r.a.createElement("a",{className:"fa-bars"},r.a.createElement(b.slide,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},right:!0,width:200},r.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"/"},"Home/Contact"),r.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"/qualifications"},"Qualifications"),r.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"/services"},"Services"),r.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"/policies"},"Policies"),r.a.createElement(p.Link,{onClick:function(){return e.closeMenu()},to:"/contact"},"Contact"))))))))}}]),a}(r.a.Component)),k=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).classes=n.props.iconClass+" img_logo",n}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.classes,style:{border:"1px solid #d1c8c8"}}))}}]),a}(r.a.Component),y=a(72),v=a.n(y),S=a(73),C=a(10),N=(a(125),a(126),r.a.Component,a(32)),O=a.n(N),j=function(e){var t=e.title,a=(e.author,e.postPath),n=e.publishDate;return r.a.createElement("section",null,O()(n,"mmm yyyy")," : ",r.a.createElement("b",null,r.a.createElement(p.Link,{to:"/posts/"+a},t)))},M=a(74),I=a.n(M),x=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gracePeriod:!0,dataStatus:0,postList:[],featured:e.featured},setTimeout((function(){n.setState({gracePeriod:!1})}),750),n}return Object(g.a)(a,[{key:"getPostList",value:function(){var e=this;fetch("https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/"+(this.state.featured?"featuredposts":"posts"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return Date.parse(t.publishDate)-Date.parse(e.publishDate)})),e.setState({dataStatus:1,postList:t})})).catch((function(t){e.setState({dataStatus:2}),console.log("Error while fetching:",t)}))}},{key:"componentDidMount",value:function(){this.getPostList()}},{key:"render",value:function(){switch(this.state.dataStatus){case 1:return r.a.createElement("ul",null,r.a.createElement(I.a,null,this.state.postList.map((function(e,t){return r.a.createElement("li",null,r.a.createElement(j,{key:e.postPath,title:e.title,author:e.author,postPath:e.postPath,publishDate:e.publishDate}))}))));case 0:return r.a.createElement("p",null,this.state.gracePeriod?"":"Loading...");case 2:return r.a.createElement("p",null,"Well this is embarassing...error loading posts. Try again later.")}}}]),a}(r.a.Component),B=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{title:"Posts"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Posts"))),r.a.createElement("section",null,r.a.createElement("p",null,"Thoughts on the world, for the world. A mix of technical posts, comments on books, and discussion of ideas."),r.a.createElement(x,null))))}}]),a}(r.a.Component),P=a(75),_=a.n(P),L=a(76),T=a.n(L),A=(a(67),r.a.Component,function(){return r.a.createElement(f.a,{title:"Music"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Music"))),r.a.createElement("p",null,"I started playing violin in elementary school and quickly fell in love. I played bassoon for a year, saxaphone for two years, and a bit of piano, but ultimately violin was the instrument for me. I am very grateful for the wonderful teachers I've gotten to study with: ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/Vaghy_String_Quartet"},"Dezso Vaghy"),", Peter McHugh, and ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://music.berkeley.edu/people/dan-flanagan-2/"},"Dan Flanagan"),"."),r.a.createElement("p",null,"You're likely to find me playing in an orchestra wherever I'm living. Most recently, I've played in...",r.a.createElement("ul",null,r.a.createElement("li",null,"Howard University Orchestra, Fall 2021"),r.a.createElement("li",null,"Googler Orchestra, Fall 2019 - Present"),r.a.createElement("li",null,"UC Berkeley Symphony Orchestra, Fall 2015 - Spring 2019"),r.a.createElement("li",null,"Youth Performing Arts School, Fall 2013 - Spring 2015"),r.a.createElement("li",null,"Louisville Youth Orchestra, Spring 2015"))),r.a.createElement("p",null,"Below is a selection of recordings of solo, chamber, and symphonic works I've performed."),r.a.createElement("section",null,r.a.createElement("div",{className:"mini-posts"},r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,"Dvorak Piano Quartet in E flat Major, Mvmt. 1 & 2"),r.a.createElement("time",{className:"published",dateTime:""},"UC Berkeley Noon Concert")),r.a.createElement("iframe",{title:"Dvorak Piano Quartet in E flat Major, Mvmt. 1 & 2",src:"https://www.youtube.com/embed/no2wYng-kWA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,'Brahms Scherzo in C Minor, "Sonatensatz"'),r.a.createElement("time",{className:"published",dateTime:""},"UC Berkeley Noon Concert"),r.a.createElement("a",{href:"#",className:"author"},r.a.createElement("img",{src:"images/avatar.jpg",alt:""}))),r.a.createElement("iframe",{title:"Brahms Scherzo in C Minor, Sonatensatz",src:"https://www.youtube.com/embed/BdPG-LcNGOw",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,"Mendelssohn Violin Concerto, Mvmt. 1"),r.a.createElement("time",{className:"published",dateTime:""},"Univ. of Louisville String Academy"),r.a.createElement("a",{href:"#",className:"author"},r.a.createElement("img",{src:"images/avatar.jpg",alt:""}))),r.a.createElement("iframe",{title:"Mendelssohn Violin Concerto, Mvmt. 1",src:"https://www.youtube.com/embed/PvJAmDdTtuE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,'Beethoven "Grosse Fuga" String Quartet, Op. 133'),r.a.createElement("time",{className:"published",dateTime:""},"Cal Fundraiser, Lafayette Retirement Home"),r.a.createElement("a",{href:"#",className:"author"},r.a.createElement("img",{src:"images/avatar.jpg",alt:""}))),r.a.createElement("iframe",{title:"Beethoven Grosse Fuga String Quartet, Op. 133",src:"https://www.youtube.com/embed/-0E_OXQLBw4",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,"Tchaikovsky Serenade for Strings, Mvmt. 3"),r.a.createElement("time",{className:"published",dateTime:""},"Youth Performing Arts School, Philharmonia"),r.a.createElement("a",{href:"#",className:"author"},r.a.createElement("img",{src:"images/avatar.jpg",alt:""}))),r.a.createElement("iframe",{title:"Tchaikovsky Serenade for Strings, Mvmt. 3",src:"https://www.youtube.com/embed/0xqngsKcEho",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h3",null,'Beethoven "Spring" Sonata in F Major, Op. 24'),r.a.createElement("time",{className:"published",dateTime:""},"UC Berkeley Noon Concert"),r.a.createElement("a",{href:"#",className:"author"},r.a.createElement("img",{src:"images/avatar.jpg",alt:""}))),r.a.createElement("iframe",{title:"Beethoven Spring Sonata in F Major, Op. 24",src:"https://www.youtube.com/embed/7YLEnRD0VDQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))))}),F=(a(243),a(77)),D=a.n(F),U=a(78),H=a.n(U),G=a(79),Q=a.n(G),Y=a(80),z=a.n(Y),W=a(81),q=a.n(W),R=function(){return r.a.createElement(f.a,{title:"Teaching"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Teaching"))),r.a.createElement("h3",null,"Howard University"),r.a.createElement("p",null,"For Fall 2021, I was on faculty at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.howard.edu/"},"Howard University")," as"," ","a visitng lecturer teaching 185 students in CSCI100: Intro to Computer Science."," ",r.a.createElement("ul",null,r.a.createElement("li",null,"Developed ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/calendar"},"syllabus and curriculum")," based on industry standards and CS courses at Berkeley and Stanford."),r.a.createElement("li",null,"Produced, recorded, and published ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCS-xiMGMN9YsMxQnqAai4hw/featured"},"~125 lecture videos on course YouTube Channel"),"."),r.a.createElement("li",null,"Built course website, ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/"},"csci100.org"),", to act as centralized public hub for students and allow for auditing the course."),r.a.createElement("li",null,"Hired and managed team of 5 Howard TAs, hosting office hours and writing/grading assignments."),r.a.createElement("li",null,"Recruited 15 volunteer TAs from Google, providing weekly 30 hours of office hours, 15 hours of mock interviews, 6 hours of 1:1 tutoring."))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"CSCI100 Fall 2021 Class Website"),r.a.createElement("time",{className:"published",datetime:"2021-08-15"},"Fall 2021"),r.a.createElement("p",null,"Course website I built to host all content for my course publicly,"," ","including lecture videos, slides, topic calendar, syllabus, announcements, and more.")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/calendar",className:"image"},r.a.createElement("img",{height:"400",src:q.a,alt:""}))),r.a.createElement("h3",null,"Stanford University"),r.a.createElement("p",null,"I've TA'ed Stanford's Code-in-Place course twice (Spring 2020, 2021),"," ","as part of a 900 person teaching staff instructing 10,000 students around the world."," ","I taugtht a section of 10 students each week for 5 weeks. My mom wanted to learn to"," ","code, so she took the course with me in Spring 2021."),r.a.createElement("h3",null,"UC Berkeley"),r.a.createElement("p",null,"While at UC Berkeley, I worked as a TA for 5 semesters, teaching",r.a.createElement("ul",{style:{listStylePosition:"inside"}},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://inst.eecs.berkeley.edu/~ee16a/fa16/"},"EE16A: Introduction to Electrical Engineering"),", Fall 2016"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://inst.eecs.berkeley.edu/~ee16a/sp17/"},"EE16A: Introduction to Electrical Engineering"),", Spring 2017"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sp18.datastructur.es/"},"CS61B: Data Structures and Algorithms"),", Spring 2018"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cs168.io/"},"CS168: Internet Architecture"),", Fall 2018"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),", Spring 2019")),"As a TA, I taught discussion sections of 20-40 students, wrote discussion sheets, wrote exams, wrote homeworks, graded exams, held office hours, and proctored exams."),r.a.createElement("p",null,"During this time, I made a variety of teaching materials for my sections. Below is a selection of some of the teaching materials that I created."),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Decision Tree - Entropy Explanation"),r.a.createElement("time",{className:"published",datetime:"2019-04-15"},"April 2019"),r.a.createElement("p",null,'This is an interactive visualization of "Information Gain" and entropy change during the splitting phase of training a decision tree. Originally I made just the visualization to provide visual intuition to my section and aid in my explanation, then I added annotations and shared the interactive demo with the entire class. Created for Spring 2019\'s ',r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.desmos.com/calculator/djl212axuk",className:"image"},r.a.createElement("img",{height:"400",src:H.a,alt:""}))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Multicast Mini-Lecture & Walkthrough"),r.a.createElement("time",{className:"published",datetime:"2018-12-01"},"November 2018"),r.a.createElement("p",null,"A 4-video series of videos teaching about the motivation and ideas behind Multicast, going over the details of DVMRP and CBT (Core-Based Trees) Multicast, and walking through the solutions to 3 practice problems. Created for ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cs168.io/"},"CS168: Internet Architecture")," to make up for a week of class ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.washingtonpost.com/education/2018/11/16/camp-fire-smoke-closes-uc-berkeley-other-bay-area-colleges/?noredirect=on&utm_term=.5004ec151007"},"cancelled due to smoke from the Camp Fire"),".")),r.a.createElement("iframe",{title:"Multicast Mini-Lecture & Walkthrough",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PLKOGYtAOQFSPPoeqcIJtJI7ri4ZWsvdx_",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Build Your Own Game (BYOG): CS61B Project"),r.a.createElement("time",{className:"published",datetime:"2018-12-10"},"December 2018 - February 2019"),r.a.createElement("p",null,"Co-wrote new project for the Spring offering of CS61B. Wrote the skeleton code structure, as well as the working prototypes and staff solution, and helped develp the project spec. Project implemented by ~1400 students. The skeleton code for the project can be found on ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Berkeley-CS61B/skeleton-sp18/tree/master/proj2/byog"},"GitHub"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sp18.datastructur.es/materials/proj/proj2/proj2",className:"image"},r.a.createElement("img",{height:"400",src:D.a,alt:""}))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"CS189 Kernels Discussion Material"),r.a.createElement("time",{className:"published",datetime:"2019-04-09"},"April 2019"),r.a.createElement("p",null,"Course material written for a discussion section on Kernels. Some problems written entirely by me, others edited from previous semesters. Taught to ~750 students in discussion sections by ~15 TAs. Created for Spring 2019's ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:Q.a,className:"image"},r.a.createElement("img",{height:"400",src:z.a,alt:""})))))},V=(a(82),a(83),a(84),function(){return r.a.createElement(f.a,{title:"Contact"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Contact"))),r.a.createElement("p",null," I love meeting new people and exchanging ideas. If you want to ask a question, get lunch or coffee, or just say hi, shoot me an email at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:alex@krentsel.com"},"alex@krentsel.com"),".")))}),J=function(){return r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Private tutoring"),r.a.createElement("p",null,"Computer Science, Physics, Mathematics & Career Counseling"))),r.a.createElement("p",null,"Professional and experienced tutor specializing in Computer Science. I also provide tutoring in college level Physics and Mathematics."))},K=a(33),Z=a.n(K),X=(a(244),a(245),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={image:e.props.defaultImage,locked:!1},e.handleClick=function(){!e.state.locked&&e.props.clickedImage&&e.setState((function(t){return{image:e.props.clickedImage,locked:!0}}))},e.handleMouseOver=function(){!e.state.locked&&e.props.mouseOverImage&&e.setState((function(t){return{image:e.props.mouseOverImage}}))},e.handleMouseOut=function(){!e.state.locked&&e.props.defaultImage&&e.setState((function(t){return{image:e.props.defaultImage}}))},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo",onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},r.a.createElement("img",{alt:"Profile pic",src:this.state.image}))}}]),a}(r.a.Component)),$=function(){return r.a.createElement("section",{id:"sidebar"},r.a.createElement("section",{id:"intro"},r.a.createElement(X,{defaultImage:Z.a,clickedImage:Z.a,mouseOverImage:Z.a}),r.a.createElement("header",null,r.a.createElement("h2",null,"Tutor Harut"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:tutorharut@gmail.com"},"tutorharut@gmail.com")))),r.a.createElement("section",null,r.a.createElement("h3",null,"Brief Intro"),r.a.createElement("p",null,"Hi! I'm Harut, a software engineer at Google LAX. I've been a private tutor and teacher's assistant for over 3 years, helping hundreds of students in their education and career. I graduated from UC Berkeley, and have previously worked in the industry at companies like Amazon and NASA. In the field of academia, I've conducted research at Carnegie Mellon University, UC Berkeley, and CSU Northridge."),r.a.createElement(p.Link,{to:"/about",className:"button large"},"Read More")),r.a.createElement("section",{id:"footer"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/alex-krentsel/",className:"fab fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/alex.krentsel",className:"fab fa-facebook-f"},r.a.createElement("span",{className:"label"},"Facebook"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCu1Zgi1SI0rZQW94_OP16NQ",className:"fab fa-youtube"},r.a.createElement("span",{className:"label"},"YouTube"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/akrentsel/",className:"fab fa-github"},r.a.createElement("span",{className:"label"},"GitHub"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://stackoverflow.com/users/4015623/alex-k",className:"fab fa-stack-overflow"},r.a.createElement("span",{className:"label"},"StackOverflow"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:alex@krentsel.com",className:"fas fa-envelope"},r.a.createElement("span",{className:"label"},"Email")))),r.a.createElement("p",{className:"copyright"},"\xa9 Harut 2023. React and blog infa built from scratch. CSS from ",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),".")))},ee=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).render=function(){return r.a.createElement(f.a,{title:"Alex Krentsel"},r.a.createElement(p.BrowserRouter,null,r.a.createElement(u.a,{id:"UA-143332212-1"},r.a.createElement(E.a,null),r.a.createElement("div",{id:"wrapper"},r.a.createElement(h.d,{path:"/",component:w}),r.a.createElement("div",{id:"main"},r.a.createElement(h.g,null,r.a.createElement(h.d,{exact:!0,path:"/",component:J}),r.a.createElement(h.d,{path:"/qualifications",component:A}),r.a.createElement(h.d,{path:"/services",component:R}),'// "/posts" exactly goes to the directory, otherwise we try to // display a particular post.',r.a.createElement(h.d,{exact:!0,path:"/policies",component:B}),r.a.createElement(h.d,{path:"/contact",component:V}),"// TODO: Add wildcard path here to show an error image.")),r.a.createElement(h.d,{exact:!0,path:"/",component:$})))))},e}return a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){e.exports=a.p+"static/media/harut.9e4e113e.jpg"},67:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/UI_example1.c915c672.png"},78:function(e,t,a){e.exports=a.p+"static/media/entropy-walkthrough-cs189.46b9391b.png"},79:function(e,t,a){e.exports=a.p+"static/media/dis10-sol.16b7edd4.pdf"},80:function(e,t,a){e.exports=a.p+"static/media/kernel-discussion-img.a6e48696.png"},81:function(e,t,a){e.exports=a.p+"static/media/csci100-website.1d25c63d.png"},82:function(e,t,a){e.exports=a.p+"static/media/slash-image.7ca72633.png"},83:function(e,t,a){e.exports=a.p+"static/media/shortl-image.c056b72b.png"},84:function(e,t,a){e.exports=a.p+"static/media/krentsel-website.ea47e122.png"},85:function(e,t,a){e.exports=a(246)},90:function(e,t,a){},99:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.b4026937.chunk.js.map