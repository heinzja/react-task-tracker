import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
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
