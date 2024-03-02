import { useState } from "react";

function ListItem({ name }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <li className="list__item">
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      {isChecked ? <del>{name}</del> : name}
    </li>
  );
}

function List() {
  return (
    <ul className="list">
      <ListItem name="Lorem ipsum set dolor." />
      <ListItem name="Lorem ipsum set dolor." />
      <ListItem name="Lorem ipsum set dolor." />
    </ul>
  );
}

export default List;
