import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

export function ItemList({ list, onAdd, onRemove }) {
  // const [checked, setChecked] = useState(true);
  // const onAdd = props.onAdd;
  // const onRemove = props.onRemove;
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const maxCount = 3;
  return (
    <ul className="modal-items">
      {list.map((newArray, index) => {
        return (
          <li key={index}>
            <Item
              content={newArray}
              isDisabled={disabled}
              isChecked={(check) => {
                if (check) {
                  if (count < maxCount) {
                    setCount((prev) => (prev += 1));
                    onAdd(newArray);
                  }
                  if (count === 2) {
                    setDisabled(true);
                  }
                } else {
                  if (onRemove(newArray)) {
                    setCount((prev) => (prev -= 1));
                    if (count <= 3) {
                      setDisabled(false);
                    }
                  }
                }
              }}
            />
          </li>
        );
      })}
    </ul>
    // <ul className="modal-items">
    //   {list.map((newArray, index) => (
    //     <li key={index}>
    //       <div className="item-body">
    //         <input
    //           name={index}
    //           type="checkbox"
    //           onChange={() => {
    //             setChecked(!checked);
    //             onClick(index, checked);
    //           }}
    //         />
    //         {`item ${newArray} `}
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
}
