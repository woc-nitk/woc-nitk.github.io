import React from "react";
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

import InfoData from "../../assets/aboutData.js"
import AboutCard from "../cards/AboutCard.js"
import "./about.css"


export default function About() {
  
    const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true, 
    navText: ["<i class='fa fa-angle-left fa-2x' aria-hidden='true'></i>" , "<i class='fa fa-angle-right fa-2x'></i>"]
};

  return (
    <div className='about'>
     
     <h1 className="page-title">About NITK Winter of Code</h1>

    
     <OwlCarousel options={options} >
     {InfoData.info.map((segment) => (
          <AboutCard 
            key={segment.title}
            title={segment.title}
            desc = {segment.desc}
            picture = {segment.picture}
            />
        ))}
     </OwlCarousel>
    </div>
  );
}
  

      {/* <div className=" about container">
        <h1
          style={{
            fontSize: "36px",
            marginTop: "60px",
            marginBottom: "5px",
          }}
        >
          About NITK Winter of Code
      </h1>

        <h2>Aim</h2>
        <p>NITK Winter of Code aims at helping students get started with open source projects that directly impact peoples' lives.</p>
        <p>Winter of Code has a philosophy very similar to larger programs like GSoC and Outreachy. Winter of Code is designed to acclimatize people to the steps involved in taking up various projects in large organizations like VLC, Mozilla, and others through GSoC and other similar programs.</p>
        <p>The participants will learn how to prepare a project  application, work in teams, understand the importance of effective communication, and most importantly, work with large codebases. They will also learn the intricate workflows and good coding practices.</p>

        <h2>Program Overview</h2>
        <p>Winter of Code is a program organized by the Centre for Open-Source Software and Hardware (COSH) at NITK Surathkal with a focus on introducing the student developers across the world to open source software and hardware development. The students can work with projects proposed by the Technical clubs, Open Source Organizations and Faculty Members of NITK over the winter break. This program also plans to introduce to students the rigorous process of developing a project proposal similar to that of GSoC.</p>
        <p>A team of students will act as an organizing committee for the Winter of Code. The organizing committee will ensure that the program is conducted smoothly and will also maintain a website for the event. The organizing committee is responsible for creating a basic filter for project proposals.</p>
        <p>For the first time in the year 2021, we have opened the NITK Winter of Code program for the students  other than NITK to submit proposals and participate in this program. They will be mentored by the organizations from NITK Surathkal.</p>

        <h2>Target Audience</h2>
        <p>Anyone who is interested in contributing to open source! There will be students from all years and so projects of varying difficulty are needed.</p>

        <h2>Projects</h2>
        <p>Projects of different levels of difficulty, catering to different skill sets and expertise, will be available. The projects will cover different domains, as much as possible. The projects can be proposed by students (Bachelors, Masters and Ph.D.), faculty members, administrative offices (for example, HODs, Chairman, Deans, Deputy Director and Director), and by the various clubs at NITK willing to mentor students. The projects will be accepted by the organizing committee based on their merit and feasibility for the duration of the Winter of Code program. New projects, as well as projects with an existing codebase, are allowed.</p>
        <p>Mentors must submit projects which can be worked on for a minimum period of 8 weeks. Each project must have 2 mentors. If an organization (any club) proposes projects, the organization must have an organization coordinator. Projects should be divided into small tasks/issues. The mentors should also include some tasks to judge the candidate prior to selecting them for the progra,. The mentors are free to conduct any kind of evaluation (interviews, patch requirements, etc) required to select the candidates before the deadline.</p>
        <p>The students can apply to projects either by filling a Google form or completing a small task, which is at the discretion of the mentors. A student can apply to a maximum of 2 projects.</p>

        <h2>Incentives:</h2>
        <ul>
          <li>Working/building innovating, exciting and positively impacting projects during their winter!</li>
          <li>Hands-on experience with open source and exposure to collaborativie ways of working!</li>
          <li>Understanding how global programs like Google Summer of Code work!</li>
          <li>An amazing opportunity to utilize the winter holidays through an impactful project</li>
          <li>Certificate issued by COSH NITK at the end of completion, both for mentors and students (Mentors can decide if students are eligible for certificates)</li>
        </ul>
      </div> */}
  
