import React from "react";
import {Link} from 'react-router-dom';
import Timeline from "./Timeline";

const timeline = [
  { event: "Deadline to submit project proposals by organizations in NITK. Submit by 22nd October to get the project proposals reviewed!", date: "October 24" },
  { event: "List of selected projects released. Students start discussing project details with mentors", date: "October 25" },
  { event: "Students can start submitting project proposals", date: "October 30" },
  { event: "Last day for students to submit project proposals", date: "November 10" },
  { event: "List of selected students for projects released", date: "November 28" },
  { event: "Coding phase begins", date: "December 1" },
  { event: "Mid evaluation", date: "January 5" },
  { event: "Final evaluation", date: "February 9" }
]

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text">
          <h1>NITK<br />Winter of Code</h1>
          <p>Kickstart your open source journey</p>
          <Link to="/projects" role="button">View Projects</Link>
          {/* <a rel="noopener noreferrer" role="button" target="_blank" href="https://forms.gle/bFDF9yeW1f7ihKRK9">Submit an application!</a> */}
        </div>
      </div>
      <br />
      <h1 style={{ textAlign: "center", fontSize: "36px" }}>Timeline</h1>
      <Timeline timelines={timeline} />
    </>
  );
};

export default Home;
