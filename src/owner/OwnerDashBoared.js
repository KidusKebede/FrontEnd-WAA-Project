import OwnerHeader from "./OwnerHeader";
import PageRoutes from "./PageRoutes";

const OwnerDashBoared = () => {
  return (
    <div className="dashboared">
      <div className="ownerHeader">
        <OwnerHeader />
      </div>
      <div>
        <PageRoutes />
      </div>
    </div>
  );
};

export default OwnerDashBoared;
