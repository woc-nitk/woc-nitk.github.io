import React from 'react'
import { Link } from "react-router-dom";
function Archive() {
  return (
    <div className="container">
        <h1
            style={{
                fontSize: "36px",
                marginTop: "60px",
                marginBottom: "5px",
            }}
        >
            Year 2021
        </h1>
        <hr
            style={{
                flex: "0 0 100%",
                marginBottom: "50px",
            }}
        />
        <h3>
            <div>
                <Link
                    to={"/2021/projects"}
                    style={{
                        fontWeight: "600",
                        marginTop: "5px",
                        textDecoration: "none",
                        fontSize: "23px",
                        color: "black"
                    }}
                >
                    Projects
                </Link>  
            </div>
            <br/>
            <div>
            <Link
                to={"/2021/organizations"}
                style={{
                    fontWeight: "600",
                    marginTop: "5px",
                    textDecoration: "none",
                    fontSize: "23px",
                    color: "black"
                }}
            >
                Organizations
            </Link>   
            </div>
               
        </h3>
    </div>
  )
}

export default Archive