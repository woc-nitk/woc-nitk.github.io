import React from "react";
import ProjectCard from "../cards/ProjectCard";
import Modal from "react-modal";
import { ProjectDetail } from '../projectspage/Projects';

Modal.setAppElement('#root');

export default function ArchivedProject({ match }) {
    const {
        params: { year },
    } = match;

    let projectList;
    if (year === '2021') {
        projectList = require('../../assets/2021/projects.json');
    } else {
        projectList = require('../../assets/2022/projects.json');
    }

    const [openModal, setModal] = React.useState(false);

    const [projectDetail, setProject] = React.useState({});

    const closeModal = () => {
        setModal(false);
    };

    const renderModal = (project) => {
        setProject(project);
        setModal(true);
    };
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
                        boxShadow: "0 0 20px rgba(0,0,0,0.3)"
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
