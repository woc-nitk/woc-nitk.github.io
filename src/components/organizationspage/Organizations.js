import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { getOrganizationsQuery } from "../../queries";
import OrganizationCard from "../cards/OrganizationCard";
import orgsList from '../../assets/organizations.json';

export default function Organizations() {
  // const { loading, data, error } = useQuery(getOrganizationsQuery);
  // if (loading) {
  //   return <h1 className="container">Loading...</h1>;
  // }
  // if (error) {
  //   console.log(error);
  //   return <h1 className="container">Error fetching organizations</h1>;
  // }

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
    <div>
      {orgsList.length===0 ? (
        <h1>
          Organizations coming soon!
        </h1>
      ) : (
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
      )}
    </div>
  </div>
);
}

// export default function Organizations() {
//   return (
//     <div className="container">
//       <h1
//         style={{
//           fontSize: "36px",
//           marginTop: "60px",
//           marginBottom: "5px",
//         }}
//       >
//         Organizations
//       </h1>
//       <hr
//         style={{
//           flex: "0 0 100%",
//           marginBottom: "50px",
//         }}
//       />
//       <p>No organizations available</p>

//     </div>
//   );
// }
