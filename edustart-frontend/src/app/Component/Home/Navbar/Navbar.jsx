import "./Navbar.scss";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import SearchByText from "../../SearchPage/SearchByText";

function Navbar(props) {
  const color = props.theme;
  return (
    <div className="Nav_Container p-mb-2">
      <h2 className="p-text-bold">
        {props.theme == "dark" ? (
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            EduStart
          </Link>
        ) : (
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            EduStart
          </Link>
        )}
      </h2>
      <Bounce bottom cascade>
        <div className="links">
          <Link to="/school/register">
            <Button
              label="Register School"
              className={color + " p-button-rounded p-button-text text-decor"}
            />
          </Link>
          <Link to="/about">
            <Button
              label="About Us"
              className={color + " p-button-rounded p-button-text text-decor"}
            />
          </Link>
          <Link to="/school/register">
            <Button
              label="Contact"
              className={color + " p-button-rounded p-button-text text-decor"}
            />
          </Link>
          <SearchByText />
        </div>
      </Bounce>
      <Button label="Sign In" className="p-button-rounded login" />
      <Link to="/signup">
        <Button label="Sign Up" className="p-button-rounded login" />
      </Link>
    </div>
  );
}

export default Navbar;
