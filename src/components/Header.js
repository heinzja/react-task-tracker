import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "red" : "green"}
        text={showForm ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
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
