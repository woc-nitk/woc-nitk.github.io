import React from 'react'
import { Link } from "react-router-dom";

function Archive(props) {

    const years = ['2022', '2021'];

  return (
    <div>
        {years.map(year => (
            <div className="container">
                <h1
                    style={{
                        fontSize: "36px",
                        marginTop: "60px",
                        marginBottom: "5px",
                    }}
                >
                    Year {year}
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
                            to={`/${year}/projects`}
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
                        to={`/${year}/organizations`}
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
        ))}
    </div>
  )
}

export default Archive
