import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { getOrganizationQuery } from "../../queries";
import ProjectCard from "../cards/ProjectCard";
import Modal from "react-modal";
import projectsList from '../../assets/projects.json';
import orgsList from '../../assets/organizations.json';
import { ProjectDetail } from '../projectspage/Projects';

export default function Organization({ match }) {
  const {
    params: { orgId },
  } = match;
  // const { loading, data, error } = useQuery(getOrganizationQuery, {
  //   variables: { org_id: orgId },
  // });
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (error) {
  //   console.log(error);
  //   return <h1>Error fetching organization details</h1>;
  // }

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

  let orgName = orgId.replace(/_/g,' ');

  const organization=orgsList.find(org => org.name === orgName);

  let projects;

  if(orgName==="Miscellaneous")
    projects = projectsList.filter(p => !p.org)
  else
    projects = projectsList.filter(p => p.org === orgName);
  

  return (
    <div className="container org">
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        contentLabel="OrgModal"
        style={{
          content: {
            maxWidth: "1000px",
            // height:"50rem"
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
            zIndex: "3"
          }
        }}
    >
        <div className="modalContent">
            <button
                className="closeModal"
                onClick={closeModal}
                style={{
                    background: "none",
                    color: "#000000",
                    border: "none",
                    margin: "0",
                    padding: "0",
                    boxShadow: "none",
                }}
            >
                x
            </button>
            <ProjectDetail project={projectDetail} />
        </div>
    </Modal>      
      
      {/* This condition is only for TEDxNITKSurathkal as the name is too big for small devices */}
      {organization.name==="TEDxNITKSurathkal"? <h1>TEDx<span style={{fontSize: "0"}}> </span>NITKSurathkal</h1>:<h1>{organization.name}</h1>}
      
      <p>{organization.description}</p>
      <h2 style={{ marginTop: "40px", marginBottom: "5px" }}>
        Projects under {organization.name}
      </h2>
      <hr
        style={{
          flex: "0 0 100%",
          marginBottom: "50px",
        }}
      />
      <div className="grid">
        {projects.map((project,idx) => {
          return (
            <ProjectCard
              onClick={() => renderModal(project)}
              key={idx}
              org={project.org}
              title={project.title}
              desc={project.summary}
            />
          );
        })}
      </div>
    </div>
  );
}
