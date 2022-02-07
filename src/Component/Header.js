import { NavLink } from "react-router-dom";
import classes from "./MainHeader.Module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
