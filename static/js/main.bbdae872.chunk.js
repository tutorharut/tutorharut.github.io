(this.webpackJsonptutorharut=this.webpackJsonptutorharut||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/harut.9e4e113e.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/alex-nature.96add150.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/alex-silly.6db494f0.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/UI_example1.c915c672.png"},37:function(e,t,a){e.exports=a.p+"static/media/entropy-walkthrough-cs189.46b9391b.png"},38:function(e,t,a){e.exports=a.p+"static/media/dis10-sol.16b7edd4.pdf"},39:function(e,t,a){e.exports=a.p+"static/media/kernel-discussion-img.a6e48696.png"},40:function(e,t,a){e.exports=a.p+"static/media/csci100-website.1d25c63d.png"},41:function(e,t,a){e.exports=a.p+"static/media/slash-image.7ca72633.png"},42:function(e,t,a){e.exports=a.p+"static/media/shortl-image.c056b72b.png"},43:function(e,t,a){e.exports=a.p+"static/media/krentsel-website.ea47e122.png"},44:function(e,t,a){e.exports=a.p+"static/media/logo-cs.bfe81e70.png"},45:function(e,t,a){e.exports=a.p+"static/media/career1.c93bd7d9.png"},46:function(e,t,a){e.exports=a.p+"static/media/phys.a59d7f15.png"},47:function(e,t,a){e.exports=a(92)},52:function(e,t,a){},61:function(e,t,a){},77:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/career.31c02eeb.png"},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),i=(a(52),a(5)),c=a(8),s=a(7),m=a(28),u=a.n(m),d=a(1),p=a(2),h=a(6),f=a.n(h),g=a(30),E=(a(61),a(11)),b=a(31),y=(a(77),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={menuOpen:!1},n}return Object(E.a)(a,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,r.a.createElement(d.Link,{to:"/"},"Home & Contact")),r.a.createElement("nav",{className:"links"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/qualifications"},"Qualifications")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/cs"},"Computer Science")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/careeredu"},"Career & Education")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/mathphys"},"Math & Physics")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/policies"},"Policies")),r.a.createElement("li",null,r.a.createElement(d.Link,{to:"/contact"},"Contact")))),r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,r.a.createElement("li",{className:"menu"},r.a.createElement("a",{className:"fa-bars"},r.a.createElement(b.slide,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},right:!0,width:275},r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/"},"Home & Contact"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/qualifications"},"Qualifications"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/cs"},"Computer Science"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/careeredu"},"Career & Education"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/mathphys"},"Math & Physics"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/policies"},"Policies"),r.a.createElement(d.Link,{onClick:function(){return e.closeMenu()},to:"/contact"},"Contact"))))))))}}]),a}(r.a.Component)),k=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).classes=n.props.iconClass+" img_logo",n}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:this.classes,style:{border:"1px solid #d1c8c8"}}))}}]),a}(r.a.Component),w=a(32),v=a.n(w),C=a(33),S=a(15),N=a.n(S),I=a(4),j=(a(87),a(88),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var r=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return n.state={location:"an unknown city",viewerTimestamp:r},n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.ajax("https://ipapi.co/json").then((function(t){var a=t.city+", "+t.country_name;e.setState({location:a})}),(function(e,t){console.log("Request failed.  Returned status of",t)}))}},{key:"render",value:function(){return r.a.createElement(f.a,{title:"About"},r.a.createElement("div",null,r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"About"))),r.a.createElement(I.VerticalTimeline,null,r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"1997",image:N.a},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"TUMO: Center for Creative Technologies")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"2013",iconStyle:{background:"rgb(3, 112, 56)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fas fa-apple-alt"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Moved to Upstate New York")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"2013",iconStyle:{background:"rgb(224, 41, 20)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fas fa-horse-head"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},"Moved to Kentucky")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"August 2014 - June 2015",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fas fa-glasses"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.interapt.com/"},"Interapt"),", Intern"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Louisville, KY"),r.a.createElement("p",null,"Co-wrote Google Glass live-streaming app that lead Interapt to be chosen as a ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://insiderlouisville.com/economy/startups/interapt-named-google-glass-work-partners/"},"Glass at Work partner"),". Worked on various Android apps.")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"Fall 2015",iconStyle:{background:"rgb(236, 181, 73)",color:"#133C76"},icon:r.a.createElement(k,{iconClass:"fas fa-university"})},r.a.createElement("h3",{className:"vertical-timeline-element-subtitle"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.berkeley.edu/"},"UC Berkeley")),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Started College"),r.a.createElement("p",null,"One of 12 Out-of-State ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://financialaid.berkeley.edu/regents-and-chancellors-scholarship"},"Regents' & Chancellor's Scholars")," of Class of 2019.")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"Summer 2016",iconStyle:{background:"rgb(80, 133, 236)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fab fa-google"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/"},"Google"),", Engineering Practicum Intern"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Mountain View, CA"),r.a.createElement("p",null,"AdWords Next team, working on the new landing page for AdWords called Overviews.")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"Summer 2017",iconStyle:{background:"rgb(235, 50, 35)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fab fa-youtube"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/"},"YouTube"),", Software Engineering Intern"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Zurich, Switzerland"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://studio.youtube.com/"},"Creator Studio")," team, YouTube's home for creators. Worked on Translations tab and diagnosing an issue in the Profanity Classifier predictions for gaming videos.")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"Summer 2018",iconStyle:{background:"rgb(73, 103, 173)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fab fa-facebook-f"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/"},"Facebook"),", Software Engineering Intern"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Menlo Park, CA"),r.a.createElement("p",null,"Ads Core Signals team, ensuring ads data is clean and usable. Wrote Messenger Bot to help developers set up and debug the Facebook SDK.")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"Spring 2019",iconStyle:{background:"rgb(236, 181, 73)",color:"#133C76"},icon:r.a.createElement(k,{iconClass:"fas fa-graduation-cap"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.berkeley.edu/"},"UC Berkeley")),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Graduated, ",r.a.createElement("i",null,"Magna Cum Laude")),r.a.createElement("p",null,"B.S. in ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eecs.berkeley.edu"},"Elec. Eng. & Comp. Sci (EECS)"),", B.A. in ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://music.berkeley.edu/"},"Music")),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,"TA'd ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/teaching"},"4 classes across 5 semesters")),r.a.createElement("li",null,"Organizer for ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://tedxberkeley.org/"},"TEDxBerkeley"),", largest university TEDx in world"),r.a.createElement("li",null,"2017-2018 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eecs.berkeley.edu/resources/undergrads/accel"},"Accel Scholar")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://pbk.berkeley.edu/"},"Phi Beta Kappa")," Honor Society"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://orchestra.berkeley.edu/"},"UC Berkeley Symphony Orchestra")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://eecs.berkeley.edu/resources/undergrads/honors"},"EECS Honors Program"))))),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"August 2019 - Mid 2021",iconStyle:{background:"rgb(235, 50, 35)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fab fa-youtube"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/"},"YouTube"),", Software Engineer"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"San Bruno, CA"),r.a.createElement("p",null,"YouTube Music and Premium Growth team, focused on driving signups and keeping members for YouTube's subscription service. Working as a full stack engineer, writing code in C++ and a variety of internal languages.")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"August 2021 - December 2021",iconStyle:{background:"rgb(0, 58, 99)",color:"#FFFFFF"},icon:r.a.createElement(k,{iconClass:"fas fa-university"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.howard.edu/"},"Howard University"),", Lecturer"),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Washington, D.C."),r.a.createElement("p",null,"Visiting faculty at Howard University, lectured 185 students and wrote curriculum for CSCI100: Intro to Computer Science. See the course website at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/"},"csci100.org"),", and ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCS-xiMGMN9YsMxQnqAai4hw/featured"},"course YouTube channel"),".")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:"Mid 2021 - Present",iconStyle:{background:"rgb(80, 133, 236)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fab fa-google"})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cloud.google.com/blog/topics/systems/google-creates-new-systems-research-group"},"Google, Systems Research Engineer")),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Sunnyvale, CA"),r.a.createElement("p",null,"Member of the ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cloud.google.com/blog/topics/systems/google-creates-new-systems-research-group"},"Systems Research Group at Google"),", run by Hank Levy and David Culler. Performing research with Sylvia Ratnasamy on redesigning aspects of Google's ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/Wide_area_network"},"WANs"),".")),r.a.createElement(I.VerticalTimelineElement,{className:"timeline-element-custom",date:this.state.viewerTimestamp,iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r.a.createElement(k,{iconClass:"fas fa-user"})},r.a.createElement("div",{className:"tooltip-wrapper"},r.a.createElement("a",{"data-tip":!0,className:"location-info-a"},r.a.createElement(C.a,{className:"location-info-tooltip",effect:"solid"},r.a.createElement("p",null,"If you're curious, I get your city from your IP address. It may be a bit off, as IP addresses don't always map well to geographic locations.")),r.a.createElement("i",{className:"fas fa-info-circle location-info-tooltip"}))),r.a.createElement("h3",{className:"vertical-timeline-element-title"},"A Visitor!"),r.a.createElement("p",null,"Someone from ",r.a.createElement("b",null,r.a.createElement("u",null,this.state.location))," read my timeline!")))),r.a.createElement("p",null,"fds")))}}]),a}(r.a.Component)),x=a(34),O=a.n(x),M=function(e){var t=e.title,a=(e.author,e.postPath),n=e.publishDate;return r.a.createElement("section",null,O()(n,"mmm yyyy")," : ",r.a.createElement("b",null,r.a.createElement(d.Link,{to:"/posts/"+a},t)))},T=a(35),_=a.n(T),A=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={gracePeriod:!0,dataStatus:0,postList:[],featured:e.featured},setTimeout((function(){n.setState({gracePeriod:!1})}),750),n}return Object(E.a)(a,[{key:"getPostList",value:function(){var e=this;fetch("https://325ab2lcl4.execute-api.us-east-1.amazonaws.com/default/"+(this.state.featured?"featuredposts":"posts"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return Date.parse(t.publishDate)-Date.parse(e.publishDate)})),e.setState({dataStatus:1,postList:t})})).catch((function(t){e.setState({dataStatus:2}),console.log("Error while fetching:",t)}))}},{key:"componentDidMount",value:function(){this.getPostList()}},{key:"render",value:function(){switch(this.state.dataStatus){case 1:return r.a.createElement("ul",null,r.a.createElement(_.a,null,this.state.postList.map((function(e,t){return r.a.createElement("li",null,r.a.createElement(M,{key:e.postPath,title:e.title,author:e.author,postPath:e.postPath,publishDate:e.publishDate}))}))));case 0:return r.a.createElement("p",null,this.state.gracePeriod?"":"Loading...");case 2:return r.a.createElement("p",null,"Well this is embarassing...error loading posts. Try again later.")}}}]),a}(r.a.Component),P=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{title:"Posts"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Posts"))),r.a.createElement("section",null,r.a.createElement("p",null,"Thoughts on the world, for the world. A mix of technical posts, comments on books, and discussion of ideas."),r.a.createElement(A,null))))}}]),a}(r.a.Component),L=(a(90),a(36)),B=a.n(L),D=a(37),W=a.n(D),F=a(38),U=a.n(F),G=a(39),H=a.n(G),V=a(40),Y=a.n(V),R=function(){return r.a.createElement(f.a,{title:"Teaching"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Teaching"))),r.a.createElement("h3",null,"Howard University"),r.a.createElement("p",null,"For Fall 2021, I was on faculty at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.howard.edu/"},"Howard University")," as"," ","a visitng lecturer teaching 185 students in CSCI100: Intro to Computer Science."," ",r.a.createElement("ul",null,r.a.createElement("li",null,"Developed ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/calendar"},"syllabus and curriculum")," based on industry standards and CS courses at Berkeley and Stanford."),r.a.createElement("li",null,"Produced, recorded, and published ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCS-xiMGMN9YsMxQnqAai4hw/featured"},"~125 lecture videos on course YouTube Channel"),"."),r.a.createElement("li",null,"Built course website, ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/"},"csci100.org"),", to act as centralized public hub for students and allow for auditing the course."),r.a.createElement("li",null,"Hired and managed team of 5 Howard TAs, hosting office hours and writing/grading assignments."),r.a.createElement("li",null,"Recruited 15 volunteer TAs from Google, providing weekly 30 hours of office hours, 15 hours of mock interviews, 6 hours of 1:1 tutoring."))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"CSCI100 Fall 2021 Class Website"),r.a.createElement("time",{className:"published",datetime:"2021-08-15"},"Fall 2021"),r.a.createElement("p",null,"Course website I built to host all content for my course publicly,"," ","including lecture videos, slides, topic calendar, syllabus, announcements, and more.")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.csci100.org/calendar",className:"image"},r.a.createElement("img",{height:"400",src:Y.a,alt:""}))),r.a.createElement("h3",null,"Stanford University"),r.a.createElement("p",null,"I've TA'ed Stanford's Code-in-Place course twice (Spring 2020, 2021),"," ","as part of a 900 person teaching staff instructing 10,000 students around the world."," ","I taugtht a section of 10 students each week for 5 weeks. My mom wanted to learn to"," ","code, so she took the course with me in Spring 2021."),r.a.createElement("h3",null,"UC Berkeley"),r.a.createElement("p",null,"While at UC Berkeley, I worked as a TA for 5 semesters, teaching",r.a.createElement("ul",{style:{listStylePosition:"inside"}},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://inst.eecs.berkeley.edu/~ee16a/fa16/"},"EE16A: Introduction to Electrical Engineering"),", Fall 2016"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://inst.eecs.berkeley.edu/~ee16a/sp17/"},"EE16A: Introduction to Electrical Engineering"),", Spring 2017"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sp18.datastructur.es/"},"CS61B: Data Structures and Algorithms"),", Spring 2018"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cs168.io/"},"CS168: Internet Architecture"),", Fall 2018"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),", Spring 2019")),"As a TA, I taught discussion sections of 20-40 students, wrote discussion sheets, wrote exams, wrote homeworks, graded exams, held office hours, and proctored exams."),r.a.createElement("p",null,"During this time, I made a variety of teaching materials for my sections. Below is a selection of some of the teaching materials that I created."),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Decision Tree - Entropy Explanation"),r.a.createElement("time",{className:"published",datetime:"2019-04-15"},"April 2019"),r.a.createElement("p",null,'This is an interactive visualization of "Information Gain" and entropy change during the splitting phase of training a decision tree. Originally I made just the visualization to provide visual intuition to my section and aid in my explanation, then I added annotations and shared the interactive demo with the entire class. Created for Spring 2019\'s ',r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.desmos.com/calculator/djl212axuk",className:"image"},r.a.createElement("img",{height:"400",src:W.a,alt:""}))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Multicast Mini-Lecture & Walkthrough"),r.a.createElement("time",{className:"published",datetime:"2018-12-01"},"November 2018"),r.a.createElement("p",null,"A 4-video series of videos teaching about the motivation and ideas behind Multicast, going over the details of DVMRP and CBT (Core-Based Trees) Multicast, and walking through the solutions to 3 practice problems. Created for ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cs168.io/"},"CS168: Internet Architecture")," to make up for a week of class ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.washingtonpost.com/education/2018/11/16/camp-fire-smoke-closes-uc-berkeley-other-bay-area-colleges/?noredirect=on&utm_term=.5004ec151007"},"cancelled due to smoke from the Camp Fire"),".")),r.a.createElement("iframe",{title:"Multicast Mini-Lecture & Walkthrough",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PLKOGYtAOQFSPPoeqcIJtJI7ri4ZWsvdx_",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0})),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"Build Your Own Game (BYOG): CS61B Project"),r.a.createElement("time",{className:"published",datetime:"2018-12-10"},"December 2018 - February 2019"),r.a.createElement("p",null,"Co-wrote new project for the Spring offering of CS61B. Wrote the skeleton code structure, as well as the working prototypes and staff solution, and helped develp the project spec. Project implemented by ~1400 students. The skeleton code for the project can be found on ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Berkeley-CS61B/skeleton-sp18/tree/master/proj2/byog"},"GitHub"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sp18.datastructur.es/materials/proj/proj2/proj2",className:"image"},r.a.createElement("img",{height:"400",src:B.a,alt:""}))),r.a.createElement("article",{className:"mini-post"},r.a.createElement("header",null,r.a.createElement("h2",null,"CS189 Kernels Discussion Material"),r.a.createElement("time",{className:"published",datetime:"2019-04-09"},"April 2019"),r.a.createElement("p",null,"Course material written for a discussion section on Kernels. Some problems written entirely by me, others edited from previous semesters. Taught to ~750 students in discussion sections by ~15 TAs. Created for Spring 2019's ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://people.eecs.berkeley.edu/~jrs/189s19/"},"CS189/CS289: Machine Learning"),".")),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:U.a,className:"image"},r.a.createElement("img",{height:"400",src:H.a,alt:""})))))},q=(a(41),a(42),a(43),function(){return r.a.createElement(f.a,{title:"Contact"},r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Contact"))),r.a.createElement("p",null," I love meeting new people and exchanging ideas. If you want to ask a question, get lunch or coffee, or just say hi, shoot me an email at ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:alex@krentsel.com"},"alex@krentsel.com"),".")))}),z=a(44),K=a.n(z),J=(a(91),a(45)),Q=a.n(J),Z=a(46),X=a.n(Z),$=function(){return r.a.createElement("article",{className:"post"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Private tutoring"),r.a.createElement("p",null,"Experienced Google Software Engineer; providing academic tutoring and career/education coaching. Also providing tutoring in college level Physics and Mathematics."))),r.a.createElement("article",{className:"post",style:{backgroundColor:"#a0a0a013"}},r.a.createElement("div",{className:"container",style:{display:"flex",alignItems:"top"}},r.a.createElement("img",{src:K.a,style:{display:"flex",justifyContent:"left",alignItems:"top"},height:125,width:125}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"top"}},r.a.createElement("div",null,r.a.createElement("p",{style:{fontWeight:"700",justifyContent:"space-between"}},"Computer Science: \xa0"),r.a.createElement("p",null," From introductory topics to advanced cutting edge technologies, I provide professional tutoring in the field of computer science. Specific topics include Data Structures, Algorithms, Backend, Frontend, Fullstack, C/C++, Java, and Python. Working proficiency in most lanugages and frameworks used by modern companies.  "))))),r.a.createElement("article",{className:"post",style:{backgroundColor:"#a0a0a013"}},r.a.createElement("div",{className:"container",style:{display:"flex",alignItems:"top"}},r.a.createElement("img",{src:Q.a,style:{display:"flex",justifyContent:"left",alignItems:"top"},height:125,width:125}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"top"}},r.a.createElement("div",null,r.a.createElement("p",{style:{fontWeight:"700",justifyContent:"space-between"}},"Career and Education Coaching: \xa0"),r.a.createElement("p",null," In addition to practical knowledge. Creating and polishing resumes. Finding internships. Finding research University applications. Scholarships. Any other career/education related extracirriculars  "))))),r.a.createElement("article",{className:"post",style:{backgroundColor:"#a0a0a013"}},r.a.createElement("div",{className:"container",style:{display:"flex",alignItems:"top"}},r.a.createElement("img",{src:X.a,style:{display:"flex",justifyContent:"left",alignItems:"top"},height:125,width:125}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"top"}},r.a.createElement("div",null,r.a.createElement("p",{style:{fontWeight:"700",justifyContent:"space-between"}},"Math and Physics: \xa0"),r.a.createElement("p",null," All lower division Mathematics, such as Algebra, Precalculus, Trigonometry, Statistics, Calculus, Discre  "))))))},ee=(a(26),a(27),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={image:e.props.defaultImage,locked:!1},e.handleClick=function(){!e.state.locked&&e.props.clickedImage&&e.setState((function(t){return{image:e.props.clickedImage,locked:!0}}))},e.handleMouseOver=function(){!e.state.locked&&e.props.mouseOverImage&&e.setState((function(t){return{image:e.props.mouseOverImage}}))},e.handleMouseOut=function(){!e.state.locked&&e.props.defaultImage&&e.setState((function(t){return{image:e.props.defaultImage}}))},e}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"logo",onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},r.a.createElement("img",{alt:"Profile pic",src:this.state.image}))}}]),a}(r.a.Component)),te=function(){return r.a.createElement("section",{id:"sidebar"},r.a.createElement("section",{id:"intro"},r.a.createElement(ee,{defaultImage:N.a,clickedImage:N.a,mouseOverImage:N.a}),r.a.createElement("header",null,r.a.createElement("h2",null,"Tutor Harut"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:tutorharut@gmail.com"},"tutorharut@gmail.com")))),r.a.createElement("section",null,r.a.createElement("h3",null,"Brief Intro"),r.a.createElement("p",null,"Hi! I'm Harut, a software engineer at Google LAX. I've been a private tutor and teacher's assistant for over 3 years, helping hundreds of students in their education and career. I graduated from UC Berkeley, and have previously worked in the industry at companies like Amazon and NASA. In the field of academia, I've conducted research at Carnegie Mellon University, UC Berkeley, and CSU Northridge."),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"top",height:"15vh"}},r.a.createElement(d.Link,{to:"/qualifications",className:"button large"},"Qualifications"))))},ae=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,ne=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).render=function(){return r.a.createElement(f.a,{title:"Tutor Harut"},r.a.createElement(d.BrowserRouter,null,r.a.createElement(u.a,{id:"UA-143332212-1"},r.a.createElement(g.a,null),r.a.createElement("div",{id:"wrapper"},ae<1280?r.a.createElement(p.d,{exact:!0,path:"/",component:te}):r.a.createElement(r.a.Fragment,null),r.a.createElement(p.d,{path:"/",component:y}),r.a.createElement("div",{id:"main"},r.a.createElement(p.g,null,r.a.createElement(p.d,{exact:!0,path:"/",component:$}),r.a.createElement(p.d,{path:"/qualifications",component:j}),r.a.createElement(p.d,{path:"/cs",component:R}),r.a.createElement(p.d,{path:"/career",component:R}),r.a.createElement(p.d,{path:"/mathphys",component:R}),r.a.createElement(p.d,{exact:!0,path:"/policies",component:P}),r.a.createElement(p.d,{path:"/contact",component:q}),"// TODO: Add wildcard path here to show an error image.")),ae>=1280?r.a.createElement(p.d,{exact:!0,path:"/",component:te}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("section",{id:"footer"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/alex-krentsel/",className:"fab fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:tutorharut@gmail.com",className:"fas fa-envelope"},r.a.createElement("span",{className:"label"},"Email"))),r.a.createElement("p",{className:"copyright"},"\xa9 Harut 2023. React and blog infa built from scratch. CSS from ",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"),".")))))))},e}return a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.bbdae872.chunk.js.map