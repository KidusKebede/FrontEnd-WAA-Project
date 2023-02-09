import { useEffect, useState } from "react";
import axios from "axios";
import Property from "../component/Property";
import Application from "./Application";

const Applications = () => {
  const [applicationList, setApplicationList] = useState([]);

  const getApplications = () => {
    axios
      .get("http://localhost:8085/api/v1/activities", {
        params: {
          status: "applied",
        },
      })
      .then((response) => {
        setApplicationList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="applications">
      <ul>
        {applicationList.map((activity) => (
          <li key={activity.id}>
            {
              <div className="application">
                <Application activity={activity} />
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
