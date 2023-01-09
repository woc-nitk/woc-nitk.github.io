import React from "react";

import Mentee from '../../assets/mentee.png'
import Mentor from '../../assets/mentor.png'
import Org from '../../assets/organization.png'

import "./guidelines.css"


export default function Guidelines() {
  return (
    <>
    <div className="guidelines">
       <div className="container hero">
         <h1>Guidelines for the participating entities</h1>
         <div className="entities">
         <a href="">
         <div className="entity">
          <img src = {Mentee} alt = ""/>
           <h2>Contributor</h2>
            <p>Come and contribute to the live projects</p>
         </div>
         </a>
         <a href="">
         <div className="entity">
          <img src = {Mentor} alt = ""/>
           <h2>Mentor</h2>
            <p>Come and lead the team of enthusisatic learners</p>
         </div>
         </a>
         <a href="">
         <div className="entity">
          <img src = {Org} alt = ""/>
           <h2>Organization</h2>
            <p>Come and contribute to the live projects</p>
         </div>
         </a>
         </div>
       </div>
       <div className="participants">
          <h2>Contributors</h2>
          <p>If you are new to open source, or a person looking to contribute to the live projects, 
            you are in the right place. Come join us!
          </p>
          <div className="entity-info">
            <div className="info">
              <h3>Application</h3>
              <ul>
          <li>Any student, currently enrolled in an accredited institute, willing to contribute to open source is eligible to apply as a contributor to this Program.</li>
          <li>The mentees/contributors are expected to <b>submit a detailed project proposal</b> conforming to the template shared by the <b>NITK Winter of Code</b> organizing committee. Certain organizations/mentors may be permitted to accept applications in a particular format of their choice.</li>
          <li>The <b>NITK Winter of Code</b> organizing committee will announce the selected mentees on the <b>Program Website</b>.</li>
        </ul>
            </div>
            <div className="info">
              <h3>Responsibilities</h3>
              <ul>
          <li>Work with complete diligence to ensure the project objectives are met.</li>
          <li>Ensure good coding & documentation practices are followed as deemed fit by the organization/mentor.</li>
          <li>Publish a final report documenting the work done during the project(carried out during <b>NITK Winter of Code</b> alone). No work done outside the duration of <b>NITK Winter of Code</b>, will be considered for evaluations or final report submissions and if violated, may lead to disqualification from the program immediately.</li>
          </ul>
            </div>
          </div>
          <a href="https://bit.ly/woc-mentee-guidelines" target="blank"><button className="read">Read more</button></a>
       </div>

       <div className="participants mentor">
          <h2>Mentors</h2>
          <p>If you are someone who is interested to lead the team of developers contributing to the live projects, you are in the right place!
          </p>
          <div className="entity-info">
            <div className="info">
              <h3>Application</h3>
              <ul>
          <li>All rules & regulations applicable to the mentors of an organization are applicable to any mentor participating in <b>NITK Winter of Code</b>.</li>
          <li>The application process is common for all mentors, irrespective of their affiliation with any organization. The project mentors need to fill out the organization/mentor form independently for every project they wish to propose and fill in the details of the corresponding mentoring organization (if any).</li>
        </ul>
            </div>
            <div className="info">
              <h3>Responsibilities</h3>
              <ul>
          <li>The mentor shall be responsible for regularly syncing up with the mentee regarding the project status, work completed, issues, etc.</li>
          <li>The mentor shall be responsible for guiding and helping the mentee during the entire course of <b>NITK Winter of Code</b></li>
         <li>Mentors will also be evaluated based on the mentee feedback and the decision of continuing the project will be decided by the <b>NITK Winter of Code</b> organizing committee.</li>
           </ul>  
            </div>
          </div>
          <a href="https://bit.ly/woc-mentor-guidelines" target="blank"><button className="read">Read more</button></a>
       </div>

       <div className="participants">
          <h2>Organizations</h2>
          <p>Do you have the problem to solve and looking for a great team? Come let's solve together.
          </p>
          <div className="entity-info">
            <div className="info">
              <h3>Application</h3>
              <ul>
          <li>Any organization willing to build an open source project or intend to work on an existing project is eligible to apply to <b>NITK Winter of Code</b>. The organization must have the source code of the project made open source that is built during the duration of the program. The previous clause shall not be applicable for organizations mentoring from the <b>National Institute of Technology Karnataka (NITK)</b>.</li>
            </ul>
            </div>
            <div className="info">
              <h3>Responsibilities</h3>
              <ul>
          <li>In <b>NITK Winter of Code</b>, an organization is considered responsible for appointing mentors for projects and ensuring that mentors fill in the application form for every project independently.</li>
          <li>An organization shall receive a mention on the <b>Program Website</b> on having at least one project proposal accepted by the <b>NITK Winter of Code</b> organizing committee.</li>
        </ul>
            </div>
          </div>
          <a href="https://bit.ly/woc-mentor-guidelines" target="blank"><button className="read">Read more</button></a>
       </div>

       
    </div>
    </>
  );
}
