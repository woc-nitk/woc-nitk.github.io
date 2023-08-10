import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function optionGenerator(txt) {
    const opts = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: txt,
            
          },
        },
    }
    return opts;
}

const labels = ['2019', '2020', '2021', '2022'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Projects',
        data: [15,13,21,20],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Mentors',
        data: [24,31,43,27],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Mentees',
        data: [31,12,14,22],
        backgroundColor: '#ebcb8b',
      },
    ],
  };

function Statistics() {
  return (
    <div className='container'>
        <h1
            style={{
                fontSize: "36px",
                marginTop: "60px",
                marginBottom: "5px",
            }}
        >
            Statistics
        </h1>
        <hr
            style={{
                flex: "0 0 100%",
                marginBottom: "50px",
            }}
        />
        <h4>
        NITK has been a forerunner in contributing to open source owing to the initiatives such as Winter of Code NITK. NITK has a proven track record of competing on the global stage in open-source contributions. NITK has had record-breaking selections of <a href="https://opensource.googleblog.com/2020/08/google-summer-of-code-2020-statistics.html">23 in Google Summer of Code, 2020 edition</a>, and <a href="https://opensource.googleblog.com/2021/06/google-summer-of-code-2021-student-stats.html">17 in Google Summer of Code, 2021 edition</a>. NITK is the only Asian institute to be part of the <a href="https://www.nsnam.org/"><b>ns-3</b></a>(one of the most famous, open-source, and widely used network simulator) <a href="https://www.nsnam.org/consortium/members/">consortium</a> due to the immense amount of open-source contributions made by students of NITK to ns-3. <a href="https://nest.nitk.ac.in/">NeST(Network Stack Tester)</a> is a network emulator designed, implemented, and maintained by the students of NITK. The students of NITK have hosted sessions on codebase walkthrough of the Linux kernel and have also contributed to the mainline <b>Linux kernel</b> on various occasions. These numbers and quality contributions to the world of open source are a testimony to the open source culture thriving at NITK owing to initiatives such as Winter of Code NITK.
        </h4>
        <br/>
        <br/>
        <Bar options={optionGenerator("Statistics")} data={data} />
    </div>
  )
}

export default Statistics