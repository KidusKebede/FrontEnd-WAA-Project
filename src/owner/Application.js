const Application = ({ activity }) => {
  return (
    <div className="application">
      <h1>ID: {activity.property.id}</h1>
      <h1>PropertyType: {activity.property.propertyType}</h1>
      <h1>Price: {activity.property.price}</h1>
      <h1>Applicant: {activity.users.name}</h1>
      <h1>Application Date: {activity.date}</h1>
      <button>Approve</button>
      <button>Reject</button>
    </div>
  );
};

export default Application;
