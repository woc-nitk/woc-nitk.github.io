import React from "react";
import {Link} from 'react-router-dom';
import Timeline from "./Timeline";
import NITKLogo from '../../assets/NITK_Logo_1.png'

const timeline = [
  { event: "Deadline to submit project proposals by organizations in NITK. Submit by 6th October to get the project proposals reviewed!", date: "October 6" },
  { event: "List of selected projects released. Students start discussing project details with mentors", date: "October 10" },
  { event: "Students can start submitting project proposals", date: "October 12" },
  { event: "Last day for students to submit project proposals", date: "November 12" },
  { event: "List of selected students for projects released", date: "November 24" },
  { event: "Coding phase begins", date: "December 9" },
  { event: "Mid evaluation", date: "January 9" },
  { event: "Final evaluation", date: "February 9" }
]

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text">
          <h1> <img src={NITKLogo} alt="NITK Logo"/><br />NITK Winter of Code</h1>
          <p>Kickstart your open source journey</p>
          {/* <Link to="/projects" role="button">View Projects</Link> */}
          {/* <a rel="noopener noreferrer" role="button" target="_blank" href="https://forms.gle/QrPDNqwABhkDRmNz6">Apply as a mentor</a> */}
          <a rel="noopener noreferrer" role="button" target="_blank" href="https://forms.gle/Szhz5Us6xdwCjSkh6">Apply as a mentee</a> 
          <Link to="/projects" role="button">View Projects</Link> 
        </div>
      </div>
      <br />
      <h1 style={{ textAlign: "center", fontSize: "36px" }}>Timeline</h1>
      <Timeline timelines={timeline} />
    </>
  );
};

export default Home;
