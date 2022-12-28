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
          <img src = {Mentee} alt = ""/>
           <h2>Contributor</h2>
            <p>Come and contribute to the live projects</p>
         </div>
         </a>
         <a href="">
         <div className="entity">
          <img src = {Mentee} alt = ""/>
           <h2>Contributor</h2>
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
          <li>The mentee must agree to the guidelines applicable for mentees/contributors under the <b>NITK Winter of Code</b>. The mentee must submit the Google form shared by the NITK Winter of Code organizing committee to be considered eligible for applying to organizations.</li>
          <li>The <b>Google form for organizations/mentors</b> (a.k.a, Contributor/Mentee Application) must be submitted by the mentee available on the <b>Program Website</b> during the application period for organizations/mentors described in the Program Timeline.</li>
          <li>The <b>Google form for organizations/mentors</b> must be submitted by by mentees for the project(s) they are applying to. A mentee may apply for a maximum of <b>2</b> projects but will be selected as a contributor for a maximum of <b>1</b> project only.</li>
          <li>The mentees/contributors are expected to <b>submit a detailed project proposal</b> conforming to the template shared by the <b>NITK Winter of Code</b> organizing committee. Certain organizations/mentors may be permitted to accept applications in a particular format of their choice.</li>
          <li>The <b>mentors/organizations</b> in the <b>NITK Winter of Code</b> reserve the right to decide to accept or reject a mentee at their sole discretion. In case of any grievances, the applicant is instructed to reach out to the organizing committee of <b>NITK Winter of Code</b>.</li>
          <li>The <b>NITK Winter of Code</b> organizing committee will announce the selected mentees on the <b>Program Website</b>.</li>
        </ul>
            </div>
            <div className="info">
              <h3>Responsibilities</h3>
              <ul>
          <li>Providing Evaluation of their Mentor(s).</li>
          <li>Work with complete diligence to ensure the project objectives are met(which may be subject to change but only after the consent of the mentor in context).</li>
          <li>Ensure good coding & documentation practices are followed as deemed fit by the organization/mentor.</li>
          <li>Publish a final report documenting the work done during the project(carried out during <b>NITK Winter of Code</b> alone). No work done outside the duration of <b>NITK Winter of Code</b>, will be considered for evaluations or final report submissions and if violated, may lead to disqualification from the program immediately.</li>
          <li>If the organizing committee of <b>NITK Winter of Code</b> reasonably believes that a Contributor has failed to meet the foregoing responsibilities, the organizing committee may remove such Contributor from the Program.</li>
        </ul>
            </div>
          </div>
          <a href="https://bit.ly/woc-mentee-guidelines" target="blank"><button className="read">Read more</button></a>
       </div>

       <div className="participants mentor">
          <h2>Mentors</h2>
          <p>If you are new to open source, or a person looking to contribute to the live projects, 
            you are in the right place. Come join us!
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
          <li>The mentor(s) mentioned in the project proposal and organization/mentor form for the project will only be considered responsible for the project and will serve as the point of contact.</li>
          <li>All mentors and mentoring organizations will be required to follow the timeline proposed by the <b>NITK Winter of Code</b> organizing committee.</li>
          <li>The mentor shall be solely responsible for helping the selected contributor get started in the organization &/or project as part of <b>NITK Winter of Code</b>.</li>
          <li>The mentor shall be responsible for regularly syncing up with the mentee regarding the project status, work completed, issues, etc.</li>
          <li>The mentor shall be responsible for guiding and helping the mentee during the entire course of <b>NITK Winter of Code</b>. We consider, similar to Google Summer of Code, that a mentor is the most valuable resource for a mentee during the course of their project.</li>
          <li>There shall be a project reviewal committee setup, as per the discretion of the <b>NITK Winter of Code</b> organizing committee, after the commencement of the program, and all mentors will have to submit their feedback of the mentees as per the timeline. <b>Adhering to the timeline is a mandate for participation in the program and shall be strictly enforced by the organizing committee.</b></li>
          <li>Mentors will also be evaluated based on the mentee feedback and the decision of continuing the project will be decided by the <b>NITK Winter of Code</b> organizing committee.</li>
          <li>In the event that discrepancies arise the decision taken by the <b>NITK Winter of Code</b> organizing committee will be final.</li>
        </ul>  
            </div>
          </div>
          <a href="https://bit.ly/woc-mentee-guidelines" target="blank"><button className="read">Read more</button></a>
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
          <li>Any organization willing to build an open source project or intend to work on an existing project is eligible to apply to <b>NITK Winter of Code</b>. The organization must have the source code of the project made open source that is built during the duration of the program. The previous clause shall not be applicable for organizations mentoring from the <b>National Institute of Technology Karnataka (NITK)</b>.</li>
          <li>The organization administrator/project mentor must agree to the guidelines applicable for organizations under the <b>NITK Winter of Code</b>. The organization administrator/project mentor must submit the Google form shared by the <b>NITK Winter of Code</b> organizing committee to be considered eligible as a mentoring organization.</li>
          <li>The <b>Google form for organizations/mentors</b> (a.k.a, Organization Application) must be submitted by an Organization Administrator/project mentor available on the <b>Program Website</b> during the application period for organizations/mentors described in the Program Timeline.</li>
          <li>The <b>Google form for organizations/mentors</b> must be submitted by individual mentors for each project of an organization/self.</li>
          <li>The <b>NITK Winter of Code</b> organizing committee reserves the right to decide to accept or reject an organization at its sole discretion.</li>
          <li>The <b>NITK Winter of Code</b> organizing committee will announce the selected organizations/projects on the <b>Program Website</b>.</li>
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
          <a href="https://bit.ly/woc-mentee-guidelines" target="blank"><button className="read">Read more</button></a>
       </div>

       
    </div>
    </>
  );
}
