import { useEffect, useState } from "react";
import axios from "axios";
import Application from "./Application";
import "./Application.css";

const Applications = () => {
  const [applicationList, setApplicationList] = useState([]);



  const tokenTemp=window.sessionStorage.getItem('token')
  const token = tokenTemp.substring(1, 187);
const config = {
  headers: { Authorization: `Bearer ${token}`}
};

// const config = {
//   headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb3NoQGdtYWlsLmNvbSIsImV4cCI6MTY3NjE0NDAxMywiaWF0IjoxNjc2MDY2MjUzfQ.Ve_RfUwkRh4UZbMUHmvdOje4xr65CgGGYTY6xdlMy9ZuebALwMidHA163di1Zx_EEIoi06SF1PiOouatri5LYA"}` }
// };

  const reject = (id) => {
    setApplicationList(applicationList.filter((activity) => activity.id != id));
  };

  const approve = (id, updatedObject) => {
    setApplicationList(
      applicationList.map((obj) => (obj.id === id ? updatedObject : obj))
    );

    axios
      .put("http://localhost:8080/api/v1/activities/${id}",config, updatedObject)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("from rent",config)
        console.error(error);
      });
  };

  const getApplications = () => {
    axios
      .get("http://localhost:8080/api/v1/activities", {
        params: {
          status: "applied",
        },
      },config)
      .then((response) => {
        setApplicationList(response.data);
      })
      .catch((error) => {
        console.log("from app",config)
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
