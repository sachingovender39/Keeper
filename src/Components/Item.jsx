import React from "react";

function Item(props) {
  const [state, changeState] = React.useState(false);
  function toggleState() {
    changeState((prevVal) => !prevVal);
  }
  return (
    <li
      onClick={toggleState}
      style={{ textDecoration: state ? "line-through" : "none" }}
    >
      {props.name}
    </li>
  );
}

export default Item;