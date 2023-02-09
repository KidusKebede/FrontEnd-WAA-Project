import { Link } from "react-router-dom";

const OwnerHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Properties</Link>
          </li>
          <li>
            <Link to="/applications">Applications</Link>
          </li>
          <li>
            <Link to="/add_property">Add Property</Link>
          </li>
          {/* <li><Link to="/log_out">Log Out</Link></li>  */}
        </ul>
      </nav>
    </header>
  );
};

export default OwnerHeader;
