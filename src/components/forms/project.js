import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getOrgMentorsQuery, addProjectMutation } from "../../queries";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const ProjectForm = ({ org_id, setState }) => {
  // const [random, setRandom] = React.useState("");
  const { loading, data, error } = useQuery(getOrgMentorsQuery, {
    variables: { org_id: org_id },
  });

  const [addProject] = useMutation(addProjectMutation, {
    onError(err) {
      console.log(err);
    },
    // onCompleted() {
    //   setRandom("Random");
    // },    
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) {
    console.log(error);
    return <h2>Error!</h2>;
  }
  return (
    <div className="app">
      <Formik
        initialValues={{
          name: "",
          work: "",
          url: "",
          // deliverables: "",
          // projectStartDate: "",
          // projectEndDate: "",
          // prerequisite1: "",
          // prerequisite2: "",
          // prerequisite3: "",
          // prerequisite4: "",
          mentor1: "",
          mentor2: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          let mentors = [];
          if (values.mentor1) mentors.push(values.mentor1);
          if (values.mentor2) mentors.push(values.mentor2);
          console.log(mentors);
          const variables = {
            name: values.name,
            work: values.work,
            deliverables: values.url,
            // prerequisites: prerequisite,
            absolute_year: new Date().getFullYear(),
            project_start_date: "2020-12-01",
            project_end_date: "2021-01-02",
            // project_start_date: `${values.projectStartDate.getFullYear()}-${
            //   values.projectStartDate.getMonth() + 1 < 10
            //     ? "0" + (values.projectStartDate.getMonth() + 1)
            //     : values.projectStartDate.getMonth()
            // }-${
            //   values.projectStartDate.getDate() < 10
            //     ? "0" + values.projectStartDate.getDate()
            //     : values.projectStartDate.getDate()
            // }`,
            // project_end_date: `${values.projectEndDate.getFullYear()}-${
            //   values.projectEndDate.getMonth() + 1 < 10
            //     ? "0" + (values.projectEndDate.getMonth() + 1)
            //     : values.projectEndDate.getMonth()
            // }-${
            //   values.projectEndDate.getDate() < 10
            //     ? "0" + values.projectEndDate.getDate()
            //     : values.projectEndDate.getDate()
            // }`,
            org_id: org_id,
            mentor_ids: mentors,
          };
          addProject({variables});
          setState(false);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          work: Yup.string().required("Required"),
          url: Yup.string().required("Required"),
          // deliverables: Yup.string().required("Required"),
          // prerequisite1: Yup.string().required("Required"),
          // projectStartDate: Yup.date().required("Required"),
          // projectEndDate: Yup.date().required("Required"),
          mentor1: Yup.string().required("Required"),
          mentor2: Yup.string().required("Required"),
        })}
      >
        {({ dirty, handleReset, isSubmitting, setFieldValue, values }) => (
          <Form>
            <h1
              style={{
                marginBottom: "2rem",
                fontSize: "42px",
              }}
            >
              Add Project
            </h1>
            <label htmlFor="name" style={{ display: "block" }}>
              Name of the project
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Enter the project name"
            />
            <ErrorMessage
              className="input-feedback"
              name="name"
              component="div"
            />
            <label htmlFor="work" style={{ display: "block" }}>
              Work to be done
            </label>
            <Field
              component="textarea"
              name="work"
              placeholder="Enter the work to be done"
              style={{minWidth: "100%", fontFamily:"Arial",  fontSize: "16px", padding: "5px"}}
            />
            <ErrorMessage
              className="input-feedback"
              name="work"
              component="div"
            />
            <label htmlFor="name" style={{ display: "block" }}>
              Project description URL
            </label>
            <Field
              type="text"
              name="url"
              placeholder="Enter the project details url"
            />
            <ErrorMessage
              className="input-feedback"
              name="url"
              component="div"
            />
            {/* <label htmlFor="deliverables" style={{ display: "block" }}>
              Deliverables
            </label>
            <Field
              component="textarea"
              name="deliverables"
              placeholder="Enter the Deliverables"
            />
            <ErrorMessage
              className="input-feedback"
              name="deliverables"
              component="div"
            /> */}
            {/* <label htmlFor="projectStartDate" style={{ display: "block" }}>
              Project Start Date
            </label>
            <DatePicker
              selected={values.projectStartDate}
              dateFormat="MMMM d, yyyy"
              className="form-control"
              name="projectStartDate"
              placeholderText="date"
              onChange={(date) => setFieldValue("projectStartDate", date)}
            />
            <ErrorMessage
              className="input-feedback"
              name="projecyStartDate"
              component="div"
            />
            <label htmlFor="projectEndDate" style={{ display: "block" }}>
              Project End Date
            </label>
            <DatePicker
              selected={values.projectEndDate}
              dateFormat="MMMM d, yyyy"
              className="form-control"
              name="projectEndDate"
              placeholderText="date"
              onChange={(date) => setFieldValue("projectEndDate", date)}
            />
            <ErrorMessage
              className="input-feedback"
              name="projectEndDate"
              component="div"
            /> */}

            
            <label htmlFor="mentor1" style={{ display: "block" }}>
              Mentor 1
            </label>
            <Field as="select" name="mentor1">
            <option value="">Select</option>
              {data.mentors.map((mentor) => {
                return (
                  <option key={mentor.id} value={mentor.id}>
                    {mentor.name}
                  </option>
                );
              })}
            </Field>
            <ErrorMessage
              className="input-feedback"
              name="mentor1"
              component="div"
            />
            <label htmlFor="mentor2" style={{ display: "block" }}>
              Mentor 2
            </label>
            <Field as="select" name="mentor2">
              <option value="">None</option>
              {data.mentors.map((mentor) => {
                return (
                  <option key={mentor.id} value={mentor.id}>
                    {mentor.name}
                  </option>
                );
              })}
            </Field>
            <ErrorMessage
              className="input-feedback"
              name="mentor2"
              component="div"
            />
            <br />
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectForm;
