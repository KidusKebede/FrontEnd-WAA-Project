import './Application'

const Application = ({ activity }) => {
  return (
    <div id="application">
      <ul>
        <li>
          <img src="https://media.istockphoto.com/id/983950204/photo/modern-house-in-the-daylight.jpg?s=612x612&w=0&k=20&c=TjmRL9-7IPsT_lRvrzomTdXeNm4T_s7EOx1ppOF-7ZQ="
            alt="appliedHouses" width="500px" height="500px"></img>
          <div id='boxed'>
            <h1>PropertyType: {activity.property.propertyType}</h1>
            <h1>Price: {activity.property.price}</h1>
            <h1>Applicant: {activity.users.name}</h1>
            <h1>Application Date: {activity.date}</h1>
            <button>Approve</button>
            <button>Reject</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Application;
