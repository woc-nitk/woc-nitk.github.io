import React from "react";
import projectList from "../../assets/projects.json";
// import { useQuery } from "@apollo/react-hooks";
// import { getProjectsQuery } from "../../queries";
import ProjectCard from "../cards/ProjectCard";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
Modal.setAppElement('#root');

export function ProjectDetail({ project }) {
    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <h4 style={{ margin: "10px 0" }}>{project.org}</h4>
            <hr style={{ marginBottom: "25px" }}></hr>
            <ReactMarkdown children={project.summary}/>
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "block",
                    margin: "5px 0",
                    color: "#0088cc",
                    fontWeight: "600",
                    textDecoration: "none",
                }}
            >
                More Details
            </a>
            <h3>Mentors:</h3>
            <ul>
                {project.mentors.map((mentor, idx) => {
                    return (
                        <li key={idx} style={{ marginLeft: "15px" }}>
                            <a
                                style={{ color: "#0088cc" }}
                                href={`mailto:${mentor.email}`}
                            >
                                {mentor.name}
                            </a>
                        </li>
                    );
                })}
            </ul>

            {/* Selected candidates */}
            <h3 style={{marginTop: "10px"}}>Selected candidates:</h3>
            {Array.isArray(project.students) && project.students.length ?
                <ul>
                    {project.students.map((student, idx) => {
                        return (
                            <li key={idx} style={{ marginLeft: "15px" }}>
                                {student}
                            </li>
                        );
                    })}
                </ul>
            :
                <p><i>No one</i></p>
            }
        </div>
    );
}

export default function Projects() {
    const [openModal, setModal] = React.useState(false);

    const [projectDetail, setProject] = React.useState({});

    const closeModal = () => {
        // setProject({});
        setModal(false);
    };

    const renderModal = (project) => {
        setProject(project);
        setModal(true);
    };
    // const { loading, data, error } = useQuery(getProjectsQuery);
    // if (loading) {
    //   return <h1 className="container">Loading...</h1>;
    // }
    // if (error) {
    //   console.log(error)
    //   return <h1 className="container">Error fetching projects</h1>;
    // }
    return (
        <div className="container">
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                contentLabel="OrgModal"
                style={{
                    content: {
                        maxWidth: "1000px",
                        maxHeight: "95vh",
                        overflowY: "scroll",
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%,-50%)",
                        padding: "3rem",
                        paddingTop: "1rem",
                        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                    },
                    overlay: {
                        zIndex: "100"
                    }
                }}
            >
                <div className="modalContent">
                    <button
                        className="closeModal"
                        onClick={closeModal}
                        style={{
                            background: "none",
                            color: "var(--dark-5)",
                            border: "none",
                            margin: "0",
                            padding: "0",
                            boxShadow: "none",
                        }}
                    >
                        ×
                    </button>
                    <ProjectDetail project={projectDetail} />
                </div>
            </Modal>
            <h1
                style={{
                    fontSize: "36px",
                    marginTop: "60px",
                    marginBottom: "5px",
                }}
            >
                Projects
            </h1>
            <hr
                style={{
                    flex: "0 0 100%",
                    marginBottom: "50px",
                }}
            />

            <div className="grid">
                {projectList.map((project, idx) => {
                    return (
                        <ProjectCard
                            onClick={() => renderModal(project)}
                            key={idx}
                            org={project.org}
                            title={project.title}
                            desc={project.summary}
                            openToAll={project.openToAll}
                        />
                    );
                })}
            </div>
        </div>
    );
}

// export default function Projects() {
//   return (
//     <div className="container">
//       <h1
//         style={{
//           fontSize: "36px",
//           marginTop: "60px",
//           marginBottom: "5px",
//         }}
//       >
//         Projects
//       </h1>
//       <hr
//         style={{
//           flex: "0 0 100%",
//           marginBottom: "50px",
//         }}
//       />

//       <p>No projects available</p>
//     </div>
//   );
// }
