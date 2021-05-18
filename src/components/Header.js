import PropTypes from "prop-types";
import { useLocation, userLocation } from 'react-router-dom';
import Button from "./Button";

const Header = ({ title, onAdd, showForm }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      { location.pathname === '/' && <Button
        color={showForm ? "red" : "green"}
        text={showForm ? "Close" : "Add"}
        onClick={onAdd}
      />}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

//CSS in JavaScript
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'orange',
// }

export default Header;
