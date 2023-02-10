import { useEffect, useState } from "react";
import axios from "axios";
import Application from "./Application";
import "./Application.css";

const Applications = () => {
  const [applicationList, setApplicationList] = useState([]);

  const reject = (id) => {
    setApplicationList(applicationList.filter((activity) => activity.id != id));
  };

  const approve = (id, updatedObject) => {
    setApplicationList(
      applicationList.map((obj) => (obj.id === id ? updatedObject : obj))
    );

    axios
      .put(`http://localhost:8080/api/v1/activities/${id}`, updatedObject)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getApplications = () => {
    axios
      .get("http://localhost:8080/api/v1/activities", {
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
                <Application
                  activity={activity}
                  approve={approve}
                  reject={reject}
                />
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Applications;
