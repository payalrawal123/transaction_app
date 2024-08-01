import { NavLink } from "react-router-dom";
const listOfLinks = [
  {
    to: "/",
    displayText: "Dashboard",
  },
  {
    to: "/login",
    displayText: "Login",
  },
  {
    to: "/register",
    displayText: "Register",
  },
];

function Navbar() {
  return (
    <div className="nav">
      {listOfLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="navlink"
          activeClassName="active"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
        >
          {link.displayText}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;
