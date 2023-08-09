import React from "react";
import OrganizationCard from "../cards/OrganizationCard";
// import orgsList from '../../assets/2021/organizations.json';

export default function ArchivedOrganizations({ match }) {

  const {
    params: { year },
  } = match;

  // console.log(year);

  // to import archived json based on year
  let orgsList;
  if (year === '2021') {
    orgsList = require('../../assets/2021/organizations.json');
  } else {
    orgsList = require('../../assets/2022/organizations.json');
  }


return (
  <div className="container">
    <h1
      style={{
        fontSize: "36px",
        marginTop: "60px",
        marginBottom: "5px",
      }}
    >
      Organizations
    </h1>
    <hr
      style={{
        flex: "0 0 100%",
        marginBottom: "50px",
      }}
    />

    <div className="grid">
      {orgsList.map((organization,idx) => {
        let url=organization.name.replace(/ /g,'_');
        return (
          <OrganizationCard
            key={idx}
            title={organization.name}
            url={`/organization/${url}`}
            desc={organization.description}
          />
        );
      })}
    </div>
  </div>
);
}